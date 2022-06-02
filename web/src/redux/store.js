import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import rootReducers from "./reducers";

// const reducerfn = (state = { counter: 0 }, action) => {};
// const store = createStore(reducerfn);

const initialState = {};
const store = createStore(
  rootReducers,
  initialState,
  compose(applyMiddleware(thunk))
);

export default store;

// `
// * steps  :-
// desgin the store
// define the actions
// create a reducer
// setup the store

// actions for g-keep :-
// create (user, label, note)
// update (note, label)
// delete (note, label)
// change [label, color, theme] of the note
// all [pinned, archived, movedToBin(deleted)] notes
// `;
