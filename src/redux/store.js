import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// Reducers
import userReducer from "./reducers/userReducer";
import queryReducer from "./reducers/queryReducer";
import postReducer from "./reducers/postReducer";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  user: userReducer,
  posts: postReducer,
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
