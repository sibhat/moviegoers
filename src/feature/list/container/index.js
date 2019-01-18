import React, { Component } from "react";
import { getMovieList } from "../store/action";
import { connect } from "react-redux";
import List from "../presentational";
class ListContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		this.props.getMovieList();
	}
	render() {
		// console.log();
		return <List data={this.props.data} />;
	}
}
const MapPropsToState = state => ({
	data: state.movies
});
export default connect(
	MapPropsToState,
	{ getMovieList }
)(ListContainer);
