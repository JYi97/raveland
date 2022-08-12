import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from './session';
import raveReducer from "./raves";
import reviewReducer from "./reviews";
import searchReducer from "./search";
import likeReducer from "./likes";

const rootReducer = combineReducers({
  // add reducer functions here
  session: sessionReducer,
  raves: raveReducer,
  reviews: reviewReducer,
  search: searchReducer,
  likes: likeReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
