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
	componentWillMount() {
		let { url, option } = this.props;
		this.props.getMovieList(option.toLowerCase(), url);
	}
	movieDetailHandler = movieId => {
		// console.log(this.props.option);
		this.props.listenCategory(this.props.option.toLowerCase(), movieId);
	};
	render() {
		let { size, data, baseUrl, url, display } = this.props;
		// console.log(data[url]);
		if (this.props.pending) return <h1>waiting</h1>;
		return (
			<List
				data={data[url]}
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
	let data = {
		popular: state.list.popular,
		top_rated: state.list.top_rated,
		upcoming: state.list.upcoming,
		now_playing: state.list.now_playing,
		on_the_air: state.list.on_the_air,
		airing_today: state.list.airing_today
	};
	return {
		data,
		size: state.list.size[4],
		baseUrl: state.list.base_url,
		category: state.list.category,
		request: state.list.request_success,
		pending: state.list.pending
	};
};
export default connect(
	MapPropsToState,
	{ getMovieList, listenCategory }
)(GridList);
