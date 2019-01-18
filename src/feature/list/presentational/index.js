import React from "react";

const index = props => {
	if (!props.data.results) {
		return <h1>waiting</h1>;
	}
	return (
		<div>
			{props.data.results.map(movie => (
				<p key={movie.id}>{movie.title}</p>
			))}
		</div>
	);
};

export default index;
