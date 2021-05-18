import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// Reducers
import userReducer from "./reducers/userReducer";
import queryReducer from "./reducers/queryReducer";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  user: userReducer,
  query: queryReducer
});



const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware)
  )
);

export default store;
