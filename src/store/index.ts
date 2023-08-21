import { configureStore } from "@reduxjs/toolkit";
import globaleducer from "./modules/global";

const store = configureStore({
  reducer: {
    global: globaleducer,
  },
});

export default store;
