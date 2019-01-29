import React, { Component } from "react";
import { getMovieDetail, getMovieRecommendation } from "../store/action";
import List from "../../list/presentational/index";
import { listenCategory } from "../../main/store/action";

import { connect } from "react-redux";
import Detail from "../presentational";
class DetailContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			option: ""
		};
	}
	componentDidMount() {
		let option = this.props.option;
		this.setState({ option });
		this.props.getMovieDetail(option, this.props.match.params.id);
		this.props.getMovieRecommendation(option, this.props.match.params.id);
	}
	movieDetailHandler = movieId => {
		// console.log(this.props.option);
		this.props.listenCategory(this.props.option.toLowerCase(), movieId);
	};
	render() {
		let { url, size, baseUrl } = this.props;
		if (!this.props.request_success) return <h1>waiting</h1>;
		return (
			<>
				<Detail
					data={this.props.result}
					size={size}
					baseUrl={baseUrl}
				/>
				<List
					data={this.props.recommendedResult}
					display={"Recommended " + this.state.option.toUpperCase()}
					category={url}
					size={size}
					baseUrl={baseUrl}
					movieDetailHandler={this.movieDetailHandler}
				/>
			</>
		);
	}
}
const MapPropsToState = state => ({
	result: state.detail.result,
	recommendedResult: state.detail.recommendedResult,
	request_success: state.detail.request_success,
	size: state.list.backdrop_sizes[2],
	baseUrl: state.list.base_url,
	category: state.list.category
});
export default connect(
	MapPropsToState,
	{ getMovieDetail, getMovieRecommendation, listenCategory }
)(DetailContainer);
