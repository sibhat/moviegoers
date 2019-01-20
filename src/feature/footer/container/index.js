import React, { Component } from "react";
import { listenCategory } from "../store/action";
import { connect } from "react-redux";
import Footer from "../presentational";
class FooterContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			All: {
				id: 0,
				name: "All"
			},
			Comedy: {
				id: 1,
				name: "Comedy"
			},
			Drama: {
				id: 2,
				name: "Drama"
			},
			currentChoice: 0
		};
	}
	listenCategoryHanlder = choice => {
		this.setState(
			prev => ({
				currentChoice: prev[choice]["id"]
			}),
			() => {
				this.props.listenCategory(choice);
			}
		);
	};
	render() {
		let choices = this.state;
		choices = Object.entries(choices);
		return (
			<Footer
				listenCategoryHanlder={this.listenCategoryHanlder}
				choices={choices}
				currentChoice={this.state.currentChoice}
			/>
		);
	}
}

export default connect(
	null,
	{ listenCategory }
)(FooterContainer);
