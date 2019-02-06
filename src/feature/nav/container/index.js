import React, { Component } from "react";
import { getMovieDetail } from "../store/action";
import { connect } from "react-redux";
import Nav from "../presentational";
class DetailContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		this.props.getMovieDetail(this.props.match.params.id);
	}
	render() {
		return <Nav data={this.props.data} />;
	}
}
const MapPropsToState = state => ({
	data: state.detail.movie
});
export default connect(
	MapPropsToState,
	{ getMovieDetail }
)(DetailContainer);
