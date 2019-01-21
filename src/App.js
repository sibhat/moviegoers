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
		let allOption;
		if (!this.props.currentChoice) {
			allOption = Object.entries(this.props.option).filter(
				item => item[1].id !== 0 && item[1]
			);
			console.log(allOption);
			allOption = allOption.map(option => (
				<ListContainer option={option} />
			));
		}
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
					{/* <ListContainer
						category="now_playing"
						option={this.props.option}
					/> */}
					{allOption}

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
const DispatchStateToProps = state => {
	let option = state.list.option;
	return {
		option,
		currentChoice: state.list.option.currentChoice
	};
};
export default withStyles(styles)(
	connect(
		DispatchStateToProps,
		{ config }
	)(App)
);
