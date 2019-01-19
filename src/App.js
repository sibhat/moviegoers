// import React, { Component } from "react";
// // import axios from "axios";
// import "./App.css";
import DetailContainer from "./feature/detail/container";
import ListContainer from "./feature/list/container";
import Nav from "./feature/nav/presentational";
import { Switch, Route } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { styles } from "./AppJSS";

class App extends React.Component {
	state = {
		open: true
	};

	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<CssBaseline />
				<Nav
					classes={classes}
					open={this.state.open}
					handleDrawerOpen={this.handleDrawerOpen}
					handleDrawerClose={this.handleDrawerClose}
				/>

				<main className={classes.content}>
					<div className={classes.appBarSpacer} />
					<Switch>
						<Route
							exact
							path="/nowplaying"
							render={props => (
								<ListContainer
									{...props}
									status="now_playing"
								/>
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
				</main>
			</div>
		);
	}
}

App.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
