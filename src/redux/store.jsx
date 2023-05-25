import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducer/index";
import { createWrapper } from "next-redux-wrapper";

// const store = createStore(rootReducer, applyMiddleware(thunk, logger));
// export default store;

// const makeStore = () => store;

// export const wrapper = createWrapper(makeStore);

// creating store
export const store = createStore(rootReducer, applyMiddleware(thunk, logger));

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
