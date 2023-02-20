import { createStore } from "redux";
import AdminReducer from "./Reducer";

const store = createStore(AdminReducer);
export default store;