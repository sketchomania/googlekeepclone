import { combineReducers } from "redux";

import notes from "./notes"; //notesSlice
import labels from "./labels"; //labelsSlice

export default combineReducers({ notes, labels });
