import React from "react";
import App from "./App";

import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import themeObj from "./utils/theme";
//Redux
import { Provider } from "react-redux";
import store from "./redux/store";
//Actions
const theme = createMuiTheme(themeObj);

function AppWithSotre() {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </MuiThemeProvider>
  );
}

export default AppWithSotre;