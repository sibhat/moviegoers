import React from "react";

const index = ({ currentChoiceMovie, className }) => {
	if (currentChoiceMovie.results.length < 1) {
		return <div className={className}>Could not get trailer</div>;
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
				title="Youtube"
			/>
		)
	);
};

export default index;
