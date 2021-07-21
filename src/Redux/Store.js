import { reducer } from "./Reducer";
import { createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";

const store  =createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store