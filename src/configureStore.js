import { createStore, applyMiddleware  } from "redux";
import rootReducer from "./reducers/index"; 
import thunk from 'redux-thunk';

export const middlewares = [thunk];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

// const store = createStore(
//     rootReducer,
//     applyMiddleware(thunk)
// );

export default createStoreWithMiddleware(rootReducer)
