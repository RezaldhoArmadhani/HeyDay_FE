import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducer";
import logger from "redux-logger";


// creating store
export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, logger))
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);