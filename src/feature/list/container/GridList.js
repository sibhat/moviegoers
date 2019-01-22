import React, { Component } from "react";
import { getMovieList, genres } from "../store/action";
import { listenCategory } from "../../main/store/action";
import { connect } from "react-redux";
import List from "../presentational";
class GridList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentWillMount() {
		let { url, option } = this.props;
		this.props.getMovieList(option.toLowerCase(), url);
		this.props.genres(`genre/${option.toLowerCase()}`);
	}
	movieDetailHandler = movieId => {
		// console.log(this.props.option);
		this.props.listenCategory(this.props.option.toLowerCase(), movieId);
	};
	render() {
		let { size, baseUrl, url, display } = this.props;
		if (this.props.pending) return <h1>waiting</h1>;
		return (
			<List
				data={this.props[url]}
				display={display}
				category={url}
				size={size}
				baseUrl={baseUrl}
				movieDetailHandler={this.movieDetailHandler}
			/>
		);
	}
}

const MapPropsToState = state => {
	return {
		size: state.list.size[4],
		baseUrl: state.list.base_url,
		category: state.list.category,
		request: state.list.request_success,
		pending: state.list.pending
	};
};
export default connect(
	MapPropsToState,
	{ getMovieList, listenCategory, genres }
)(GridList);
