import { combineReducers } from "redux";

import noteReducer from "./noteReducer";
import authReducer from "./authReducer";
import labelReducer from "./labelReducer";

export default combineReducers({ authReducer, noteReducer, labelReducer });
