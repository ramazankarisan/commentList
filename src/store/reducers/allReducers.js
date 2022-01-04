import { combineReducers } from "redux";
import { commentReducer } from "./commentReducer";
import { postReducer } from "./postReducer";

export const allReducers = combineReducers({ post: postReducer, comment: commentReducer })