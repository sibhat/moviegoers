import React, { Component } from "react";
import { getMovieList } from "../store/action";
import { listenCategory } from "../../main/store/action";
import { connect } from "react-redux";
import List from "../presentational";
class ListContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		this.props.getMovieList(this.props.status);
	}
	movieDetailHandler = id => {
		this.props.listenCategory(id);
	};

	render() {
		console.log(data);
		let { data, size, baseUrl } = this.props;
		if (!this.props.data) return <h1>wating</h1>;
		return (
			<>
				<List
					data={data[this.props.status]}
					size={size}
					baseUrl={baseUrl}
					movieDetailHandler={this.movieDetailHandler}
				/>
			</>
		);
	}
}
const MapPropsToState = state => {
	let data = {
		popular: state.list.popular_movies,
		top_rated: state.list.topRated_movies,
		upcoming: state.list.upComing_movies,
		now_playing: state.list.nowPlaying_movies
	};
	return {
		data,
		size: state.list.size[4],
		baseUrl: state.list.base_url
	};
};
export default connect(
	MapPropsToState,
	{ getMovieList, listenCategory }
)(ListContainer);
