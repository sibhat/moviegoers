import React, { Component } from "react";
import { getMovieDetail, listenCategory } from "../store/action";
import { connect } from "react-redux";
import Detail from "../presentational";
class MainContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		setTimeout(() => {
			let { option, currentChoice } = this.props;

			// console.log(option);
			if (!currentChoice) {
				this.props.listenCategory(
					option[0][1]["name"].toLowerCase(),
					this.props.data.results[0]["id"]
				);
			} else {
				this.props.listenCategory(
					option[1]["name"].toLowerCase(),
					this.props.data.results[0]["id"]
				);
			}
		}, 1000);
	}

	render() {
		return (
			<Detail
				currentChoiceMovie={this.props.currentChoiceMovie}
				className={this.props.className}
			/>
		);
	}
}
const MapPropsToState = state => ({
	data: state.list.top_rated,
	currentChoiceMovie: state.trailer.currentChoiceMovie
});
export default connect(
	MapPropsToState,
	{ getMovieDetail, listenCategory }
)(MainContainer);
