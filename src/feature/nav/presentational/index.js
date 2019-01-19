import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";

const index = () => {
	return (
		<AppBar position="static">
			<h1>Welcome to react redux set up boiler plates</h1>

			<div className="logo" />

			<Link to="/nowplaying">now playing</Link>

			<Link to="/popular">popular movies</Link>

			<Link to="/movies">all movies</Link>
		</AppBar>
	);
};

export default index;
