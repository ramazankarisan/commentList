import { combineReducers } from "redux";
import { postReducer } from "./postReducer";

export const allReducers = combineReducers({ post: postReducer })