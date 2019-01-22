import React from "react";
import GridList from "./GridList";
import { connect } from "react-redux";

const ListContainer = props => {
	let { category, option } = props;

	let lists = category[option].map(list => (
		<GridList
			url={list.url}
			display={list.display}
			option={option}
			id={list.id}
			key={list.id}
			{...list}
		/>
	));
	return <div>{lists}</div>;
};
const MapPropsToState = state => ({
	category: state.list.category,
	request: state.list.request
});
export default connect(MapPropsToState)(ListContainer);
