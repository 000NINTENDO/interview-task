import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducer/rootReducer";
import ReduxThunk from "redux-thunk";

const enhancer = composeWithDevTools(applyMiddleware(ReduxThunk));

const store = createStore(rootReducer, enhancer);

export default store;
