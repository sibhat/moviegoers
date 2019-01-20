import React from "react";

const index = ({ currentChoiceMovie, className }) => {
	if (!currentChoiceMovie) {
		return <div className={className}>waiting</div>;
	}
	return (
		currentChoiceMovie && (
			<iframe
				className={className}
				src={`https://www.youtube.com/embed/${
					currentChoiceMovie.results[0]["key"]
				}`}
				frameBorder="0"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			/>
		)
	);
};

export default index;