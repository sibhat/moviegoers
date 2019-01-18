import React, { Component } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

class App extends Component {
	componentDidMount() {
		axios
			.get(
				"https://api.themoviedb.org/3/movie/297802/videos?api_key=" +
					process.env.MOVIEDB_API +
					"e&language=en-US"
			)
			.then(result => {
				console.log({ result });
			})
			.catch(error => {
				console.log({ error });
			});
	}
	render() {
		return (
			<div className="App">
				<h1>Welcome to react redux set up boiler plates</h1>
			</div>
		);
	}
}

export default App;
