import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import configureStore from "./reducer";
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const store = configureStore();
const theme = createMuiTheme({
	palette: {
		background: {
			default: "#770227",
			paper: "#424242"
		},
		primary: {
			contrastText: "#fff",
			dark: "#303f9f",
			light: "#7986cb",
			main: "#770227"
		},
		contrastThreshold: 9,

		type: "dark"
	}
});
ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	</MuiThemeProvider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
