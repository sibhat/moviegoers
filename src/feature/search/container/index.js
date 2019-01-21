import React, { Component } from "react";
import Search from "../presentational";
import { search } from "../store/action";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchItem: ""
		};
	}
	onChangeHandelr = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	onSubmit = e => {
		e.preventDefault();
		this.props.search("movie", this.state.searchItem);
		this.props.history.push("/search");
	};
	render() {
		return (
			<Search
				classes={this.props.classes}
				changeHandler={this.onChangeHandelr}
				searchItem={this.state.searchItem}
				onSubmit={this.onSubmit}
			/>
		);
	}
}

export default connect(
	null,
	{ search }
)(withRouter(index));
