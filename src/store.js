import { createStore, combineReducers } from "redux";
import warehouseReducer from "./warehouseReducer";
import filtereReducer from "./filterReducer";

const initialState = {};

const store = createStore(
  combineReducers({
    warehouses: warehouseReducer,
    filters: filtereReducer
  }),
  initialState
);
window.store = store;
export default store;
