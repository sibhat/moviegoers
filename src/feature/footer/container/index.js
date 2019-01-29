import React, { Component } from "react";
import { listenCategory } from "../store/action";
import { currentOptionHandler } from "../../list/store/action";
import { connect } from "react-redux";
import Footer from "../presentational";
class FooterContainer extends Component {
	listenCategoryHanlder = id => {
		// listen for user choice b/w movie or tv show or all
		this.props.currentOptionHandler(id);
	};
	render() {
		let choices = this.props.data;
		choices = Object.entries(choices);
		return (
			<Footer
				listenCategoryHanlder={this.listenCategoryHanlder}
				choices={choices}
				currentChoice={this.props.currentChoice}
			/>
		);
	}
}
const MapStateToProps = state => {
	return {
		data: state.list.option,
		currentChoice: state.list.option.currentChoice
	};
};
export default connect(
	MapStateToProps,
	{ listenCategory, currentOptionHandler }
)(FooterContainer);
