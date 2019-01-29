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
		// after 1 sec initial app render, get a trailer for the first tv show on popualr category
		// E.g => this.props.listenCategory("tv", "12345")
		setTimeout(() => {
			let { option, request_success } = this.props;
			if (request_success && option) {
				this.props.listenCategory(
					option[0][1]["name"].toLowerCase(),
					this.props.data.results[0]["id"]
				);
			}
		}, 1000);
	}

	render() {
		// check if there is trailer
		if (!this.props.currentChoiceMovie) {
			return <div className={this.props.className}>waiting</div>;
		}
		return (
			<Detail
				currentChoiceMovie={this.props.currentChoiceMovie}
				className={this.props.className}
			/>
		);
	}
}
const MapPropsToState = state => ({
	data: state.list.category.TV[0]["popular"],
	currentChoiceMovie: state.trailer.currentChoiceMovie,
	request_success: state.list.request_success
});
export default connect(
	MapPropsToState,
	{ getMovieDetail, listenCategory }
)(MainContainer);
