import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./feature/list/store/reducer";
import rootReducer2 from "./feature/detail/store/reducer";
import rootReducer3 from "./feature/main/store/reducer";

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
	return createStore(
		combineReducers({
			list: rootReducer,
			detail: rootReducer2,
			trailer: rootReducer3
		}),

		preloadedState,
		applyMiddleware(thunkMiddleware, loggerMiddleware)
	);
}
