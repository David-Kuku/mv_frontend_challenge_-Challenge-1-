import { reducer } from "./Reducer";
import { createStore } from "redux";

const store = createStore(reducer)

export default store