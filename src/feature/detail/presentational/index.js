import React from "react";

const index = props => {
	if (!props.data.id) {
		return <h1>waiting</h1>;
	}
	return (
		<div>
			<p key={props.data.id}>{props.data.title}</p>
			<p>{props.data.overview}</p>
		</div>
	);
};

export default index;
