import React, { Component } from "react";
import { connect } from "react-redux";

import List from "../presentational";
class GenreList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentWillMount() {
		// let { option } = this.props;
	}
	movieDetailHandler = movieId => {
		this.props.listenCategory(this.props.option.toLowerCase(), movieId);
	};
	render() {
		let { baseUrl, data, category, size, genres, request } = this.props;
		console.log(this.props);
		if (!request) return <h1>waiting</h1>;

		return (
			<h1> Genres coming</h1>
			// <List
			// 	data={data[url]}
			// 	display={display}
			// 	category={url}
			// 	size={size}
			// 	baseUrl={baseUrl}
			// 	movieDetailHandler={this.movieDetailHandler}
			// />
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
	let genres = {
		TV: state.list.genres.TV,
		Movie: state.list.genres.Movie
	};
	return {
		data,
		genres,
		size: state.list.size[4],
		baseUrl: state.list.base_url,
		category: state.list.category,
		request: state.list.request_success
	};
};
export default connect(MapPropsToState)(GenreList);
