import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import configureStore from "./reducer";

const store = configureStore();

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<Provider store={store}>
			<Router>
				<App />
			</Router>{" "}
		</Provider>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
