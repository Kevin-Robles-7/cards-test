import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "../reducers/contentReducer";
import authSlice from "../reducers/authSlice";

const rootReducer = combineReducers({
    auth: authSlice,
    content: contentReducer,
});

const store = configureStore({
    reducer:rootReducer,
})

export default store;