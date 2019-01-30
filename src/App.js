import React from "react";
import ListContainer from "./feature/list/container";
import FooterContainer from "./feature/footer/container";
import DetailContainer from "./feature/detail/container";
import GridListForSearch from "./feature/list/container/GridListForSearch";
import Main from "./feature/main/container";
import Nav from "./feature/nav/presentational";
import compose from "recompose/compose";

import { Route, withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { styles } from "./AppJSS";
import { config } from "./feature/list/store/action";
import { connect } from "react-redux";
import Logo from "./util/Logo";
import TransitionGroup from "react-transition-group/TransitionGroup"; // ES6

class App extends React.Component {
	state = {
		open: false,
		logo: true
	};
	componentDidMount() {
		this.props.config();
	}
	onSVGAnimeComplete = () => {
		this.setState({
			logo: false
		});
		// this.setState((prevState, props) => {
		// 	return { logo: !prevState.logo };
		// });
	};
	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};

	render() {
		// if (!this.props.request_success) return <h1> waiting</h1>;
		// currentChoice initial state is 0 represent for all option.
		// currentChoice state 1 represent "TV"
		// currentChoice state 2 represent "Movie"
		// currentChoice used for filtering results upon user choice from footer components
		// option intial state state => {0: { id: 0,name: "All"},1: {id: 1,name: "TV"},2: {id: 2,name: "Movie"},currentChoice: 0}

		let { classes, option, currentChoice } = this.props;
		let result;

		if (!currentChoice) {
			option = Object.entries(option).filter(
				(item, index, arry) =>
					item[1].id !== 0 && index !== arry.length - 1
			);
			result = (
				<Route
					path="/"
					exact
					render={props =>
						option.map(option => (
							<ListContainer
								option={option[1]["name"]}
								key={option[1].id}
								{...props}
							/>
						))
					}
				/>
			);
		} else {
			result = (
				<Route
					path="/"
					exact
					render={props => (
						<ListContainer
							option={option[currentChoice]["name"]}
							{...props}
						/>
					)}
				/>
			);
		}
		if (this.state.logo)
			return (
				<TransitionGroup component="div">
					<Logo cb={this.onSVGAnimeComplete} />
				</TransitionGroup>
			);
		return (
			<div className={classes.root}>
				<CssBaseline /> {/* reset css for all devices */}
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
							<Main
								className={classes.main}
								option={option}
								currentChoice={currentChoice}
							/>
							/* ^^ main foucs of the app, and Landing page to display trailer for specific movie */
						)}
					/>
					{result}
					{/* ^^ display gridlist of all catagories of tv and movies*/}
					<Route
						path="/search"
						render={props => <GridListForSearch {...props} />}
					/>
					<Route
						path="/movies/:id"
						render={props => (
							<DetailContainer {...props} option={"movie"} />
						)}
					/>
					<Route
						path="/tv/:id"
						render={props => (
							<DetailContainer {...props} option={"tv"} />
						)}
					/>
				</main>
				<FooterContainer />
			</div>
		);
	}
}

const DispatchStateToProps = state => ({
	option: state.list.option,
	currentChoice: state.list.option.currentChoice,
	request_success: state.list.request_success
});

export default compose(
	withRouter,
	connect(
		DispatchStateToProps,
		{ config }
	),
	withStyles(styles)
)(App);
