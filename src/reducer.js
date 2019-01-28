import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunkMiddleware from "redux-thunk";

import rootReducer from "./feature/list/store/reducer";
import rootReducer2 from "./feature/detail/store/reducer";
import rootReducer3 from "./feature/main/store/reducer";
import rootReducerSearch from "./feature/search/store/reducet";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

// const initialState = {};
const enhancers = [];
const middleware = [thunkMiddleware];

if (process.env.NODE_ENV === "development") {
	const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

	if (typeof devToolsExtension === "function") {
		enhancers.push(devToolsExtension());
	}
}

const composedEnhancers = compose(
	applyMiddleware(...middleware),
	...enhancers
);

export default function configureStore(initialState) {
	return createStore(
		combineReducers({
			list: rootReducer,
			detail: rootReducer2,
			trailer: rootReducer3,
			search: rootReducerSearch
		}),

		initialState,
		composedEnhancers
	);
}
