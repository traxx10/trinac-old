import { createStore, compose, applyMiddleware } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "../reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage: storage
};

const persistReducers = persistReducer(persistConfig, reducers);

const store = createStore(
  persistReducers,
  {},
  compose(applyMiddleware(thunk, logger))
);

export default store;
