import React, { useState, useEffect, useMemo } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import parse from "autosuggest-highlight/parse";
import throttle from "lodash/throttle";

import { geocodeByAddress, getLatLng } from "react-places-autocomplete";

const autocompleteService = { current: null };

const useStyles = makeStyles((theme) => ({
  option: {
    color: theme.palette.primary.main,
  },
  input: {
    color: "black",
  },
  listbox: {
    backgroundColor: "white",
  },
  popupIndicator: {
    display: "none",
  },
  noOptions: {
    display: "none",
  },
}));

function Search({inputRef, onChange, name}) {
  const classes = useStyles();
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);

  const fetch = useMemo(
    () =>
      throttle((request, callback) => {
        autocompleteService.current.getPlacePredictions(request, callback);
      }, 200),
    []
  );


  useEffect(() => {
    let active = true;

    if (!autocompleteService.current && window.google) {
      autocompleteService.current = new window.google.maps.places.AutocompleteService();
    }
    if (!autocompleteService.current) {
      return undefined;
    }

    if (inputValue === "") {
      setOptions(value ? [value] : []);
      return undefined;
    }

    fetch(
      {
        input: inputValue,
        types: ["(cities)"],
        componentRestrictions: { country: "us" },
      },
      async (results) => {
        if (active) {
          let newOptions = [];

          if (value) {
            newOptions = [value];
            const results = await geocodeByAddress(inputValue);
            let filter = results[0].formatted_address.split(',');
            const data = await getLatLng(results[0]);
            data.lon = data.lng;
            delete data.lng;
            data.city = filter[0];
            data.state = filter[1];
            console.log(data);
            onChange({
          target: {
            name: name,
            value: data,
          },
        });
          }

          if (results) {
            newOptions = [...newOptions, ...results];
          }

          setOptions(newOptions);
        }
      }
    );

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch]);

  return (
    <Autocomplete
      id="Search-Bar"
      classes={classes}
      style={{ width: 200 }}
      getOptionLabel={(option) =>
        typeof option === "string" ? option : option.description
      }
      filterOptions={(x) => x}
      options={options}
      autoComplete
      includeInputInList
      filterSelectedOptions
      value={value}
      size="small"
      onChange={(event, newValue) => {
        setOptions(newValue ? [newValue, ...options] : options);
        setValue(newValue);
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          underline={false}
          label="Search..."
          variant="standard"
          color={classes.label}
          fullWidth
          InputProps={{ ...params.InputProps, disableUnderline: true }}
        />
      )}
      renderOption={(option) => {
        const matches =
          option.structured_formatting.main_text_matched_substrings;
        const parts = parse(
          option.structured_formatting.main_text,
          matches.map((match) => [match.offset, match.offset + match.length])
        );

        return (
          <Grid className={classes.option} container alignItems="center">
            <Grid item>
              <LocationOnIcon className={classes.icon} />
            </Grid>
            <Grid item xs>
              {parts.map((part, index) => (
                <span
                  key={index}
                  style={{
                    fontWeight: part.highlight ? 700 : 400,
                  }}
                >
                  {part.text}
                </span>
              ))}

              <Typography variant="body2" color="textSecondary">
                {option.structured_formatting.secondary_text}
              </Typography>
            </Grid>
          </Grid>
        );
      }}
    />
  );
}

export default (Search);