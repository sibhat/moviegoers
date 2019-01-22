import React, { Component } from "react";
import { getMovieList } from "../store/action";
import { listenCategory } from "../../main/store/action";
import { connect } from "react-redux";
import List from "../presentational";
class GridList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	movieDetailHandler = movieId => {
		// console.log(this.props.option);
		this.props.listenCategory(this.props.option.toLowerCase(), movieId);
	};
	render() {
		let { size, data, baseUrl, url, request } = this.props;
		// console.log(data[url]);
		if (!request) return <h1>waiting</h1>;
		return (
			<List
				data={data}
				display={"search Result"}
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
		data: state.search.searchResultsMulti,
		size: state.list.size[4],
		baseUrl: state.list.base_url,
		request: state.list.request_success,
		pending: state.list.pending
	};
};
export default connect(
	MapPropsToState,
	{ getMovieList, listenCategory }
)(GridList);
