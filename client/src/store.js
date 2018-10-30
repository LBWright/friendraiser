import { createStore } from "redux";
import { rootReducer } from "./redux-modules";

const store = createStore(rootReducer);

export default store;
