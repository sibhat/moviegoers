import React, { Component } from "react";
// import axios from "axios";
import "./App.css";
import DetailContainer from "./feature/detail/container";
import ListContainer from "./feature/list/container";
import Nav from "./feature/nav/presentational";
import { Switch, Route } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<div className="layout">
				<Nav />

				<Switch>
					<Route
						exact
						path="/nowplaying"
						render={props => (
							<ListContainer {...props} status="now_playing" />
						)}
					/>
					<Route
						exact
						path="/popular"
						render={props => (
							<ListContainer {...props} status="popular" />
						)}
					/>
					<Route path="/movies/:id" component={DetailContainer} />
				</Switch>
				<div style={{ textAlign: "center" }}>
					Sibhat Design ©2018 Created by Ant UED
				</div>
			</div>
		);
	}
}

export default App;
