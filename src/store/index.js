import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "./middleware/thunk.js";
import peopleReducer from "./peopleReducer";
import personReducer from "./personReducer.js";

const rootReducer = combineReducers({
  people: peopleReducer,
  person: personReducer
});

export default () => createStore(rootReducer, applyMiddleware(thunk));