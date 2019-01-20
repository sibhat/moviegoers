import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./feature/list/store/reducer";
import rootReducer2 from "./feature/detail/store/reducer";
import rootReducer3 from "./feature/main/store/reducer";

const composeEnhancers =
	typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;

const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));

export default function configureStore(preloadedState) {
	return createStore(
		combineReducers({
			list: rootReducer,
			detail: rootReducer2,
			trailer: rootReducer3
		}),

		preloadedState,
		enhancer
	);
}
