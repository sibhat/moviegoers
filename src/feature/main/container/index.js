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
			if (this.props.data)
				this.props.listenCategory(this.props.data.results[0]["id"]);
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
	data: state.list.movies,
	currentChoiceMovie: state.trailer.currentChoiceMovie
});
export default connect(
	MapPropsToState,
	{ getMovieDetail, listenCategory }
)(MainContainer);
