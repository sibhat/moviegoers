// import React, { Component } from "react";
// // import axios from "axios";
// import "./App.css";
// import DetailContainer from "./feature/detail/container";
import ListContainer from "./feature/list/container";
import FooterContainer from "./feature/footer/container";
import GridListForSearch from "./feature/list/container/GridListForSearch";
import Main from "./feature/main/container";
import Nav from "./feature/nav/presentational";
import { Route } from "react-router-dom";
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
		let { classes, option, currentChoice } = this.props;
		let allOption;

		if (!currentChoice) {
			option = Object.entries(option).filter(
				(item, index, arry) =>
					item[1].id !== 0 && index !== arry.length - 1
			);
			allOption = option.map(option => (
				<ListContainer option={option[1]["name"]} key={option[1].id} />
			));
		} else {
			allOption = (
				<ListContainer option={option[currentChoice]["name"]} />
			);
		}

		// console.log(option);
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
					<Route
						path="/"
						exact
						render={props => (
							<>
								<Main
									className={classes.main}
									option={option}
									currentChoice={currentChoice}
								/>

								{allOption}
							</>
						)}
					/>
					<Route
						path="/search"
						render={props => <GridListForSearch {...props} />}
					/>
				</main>
				<FooterContainer />
			</div>
		);
	}
}

App.propTypes = {
	classes: PropTypes.object.isRequired
};
const DispatchStateToProps = state => ({
	option: state.list.option,
	currentChoice: state.list.option.currentChoice
});
export default withStyles(styles)(
	connect(
		DispatchStateToProps,
		{ config }
	)(App)
);
