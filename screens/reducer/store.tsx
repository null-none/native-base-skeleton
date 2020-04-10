import { combineReducers } from "redux";

import appReducer from "./appReducer";

const mainStore = combineReducers({
  app: appReducer
});

export default mainStore;
