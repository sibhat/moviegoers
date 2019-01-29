import React from "react";
import GridList from "./GridList";
import { connect } from "react-redux";

const ListContainer = props => {
	// option can be either tv/movie
	// each option have category state with partial url, display used in presentation/index to display name for each category, and an id, result.data property as well
	let { category, option } = props;

	let lists = category[option].map(list => (
		<GridList
			url={list.url}
			display={list.display}
			option={option}
			id={list.id}
			key={list.id}
			{...list}
			{...props}
		/>
	));
	return <React.Fragment>{lists}</React.Fragment>;
};
const MapPropsToState = state => ({
	category: state.list.category,
	request: state.list.request_success
});
export default connect(MapPropsToState)(ListContainer);
