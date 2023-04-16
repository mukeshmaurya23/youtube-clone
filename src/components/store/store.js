import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import cacheSeacrhSlice from "./cacheSeacrhSlice";
import chatSlice from "./chatSlice";
const store = configureStore({
  reducer: {
    app: appSlice,
    cacheSearch: cacheSeacrhSlice,
    chat: chatSlice,
  },
});

export default store;
