// import React, { Component } from "react";
// // import axios from "axios";
// import "./App.css";
// import DetailContainer from "./feature/detail/container";
import ListContainer from "./feature/list/container";
import FooterContainer from "./feature/footer/container";
import Main from "./feature/main/container";
// import Nav from "./feature/nav/presentational";
// import { Route } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { styles } from "./AppJSS";
import { config } from "./feature/list/store/action";
import { connect } from "react-redux";
class App extends React.Component {
	state = {
		open: false
	};
	componentDidMount() {
		this.props.config();
	}

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
				{/* <Nav
					classes={classes}
					open={this.state.open}
					handleDrawerOpen={this.handleDrawerOpen}
					handleDrawerClose={this.handleDrawerClose}
				/> */}

				<main className={classes.content}>
					<Main className={classes.main} />
					<ListContainer status="now_playing" />

					<ListContainer status="top_rated" />
					{/* <ListContainer status="latest" /> */}
					<ListContainer status="popular" />
					<ListContainer status="upcoming" />

					{/* <Route path="/movies/:id" component={DetailContainer} /> */}
				</main>
				<FooterContainer />
			</div>
		);
	}
}

App.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
	connect(
		null,
		{ config }
	)(App)
);
