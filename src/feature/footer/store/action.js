import axios from "axios";
import * as actionType from "./actionType";

const categoryRequestHandler = data => ({
	type: actionType.CATEGORY,
	payload: data
});

export const listenCategory = choice => dispatch => {
	dispatch({ type: `REQUEST ${choice} SEND` });
	axios
		.get(
			`https://api.themoviedb.org/3/movie/${choice}?api_key=${
				process.env.REACT_APP_MOVIEDB_API
			}&language=en-US&page=3`
		)
		.then(result => {
			dispatch({ type: `REQUEST ${choice} SUCCESS` });
			dispatch(categoryRequestHandler(result.data));
		})
		.catch(() => {
			dispatch({ type: `REQUEST ${choice} FAILD` });
		});
};
