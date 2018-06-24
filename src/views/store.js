import { crateStore, applyMiddleware, createStore } from "redux";
import reducers from "./reducer/user/";

import thunk from "react-thunk";
import logger from "redux-logger";

const store = createStore (
  reducers, 
  applyMiddleware(thunk, logger)
);

export default store;