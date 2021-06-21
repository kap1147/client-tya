import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// Reducers
import authReducer from "./reducers/authReducer";
import userReducer from "./reducers/userReducer";
import queryReducer from "./reducers/queryReducer";
import postReducer from "./reducers/postReducer";
import socketReducer from "./reducers/socketReducer";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
    auth: authReducer,
    user: userReducer,
    posts: postReducer,
    query: queryReducer,
    socket: socketReducer
});



const store = createStore(
    reducers,
    initialState,
    compose(
        applyMiddleware(...middleware)
    )
);

export default store;
