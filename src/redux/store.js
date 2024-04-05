import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productReducer from "./slices/countrySlice";
import nameReducer from "./slices/nameSlice";

const rootReducer = combineReducers({
  products: productReducer,
  name: nameReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
