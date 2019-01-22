import axios from "axios";
import * as actionType from "./actionType";

const connectOptionToAction = {
	multi: actionType.SEARCH_MULTI_FETCH,
	movie: actionType.SEARCH_MOVIE_FETCH,
	tv: actionType.SEARCH_TV_FETCH
};
const searchHandler = (option, data) => ({
	type: connectOptionToAction[option],
	payload: data
});

export const search = (option, query) => dispatch => {
	dispatch({ type: actionType.SEARCH_FETCHING });

	axios
		.get(
			`https://api.themoviedb.org/3/search/${option}?api_key=${
				process.env.REACT_APP_MOVIEDB_API
			}&language=en-US&query=${query}&page=3`
		)
		.then(result => {
			dispatch(searchHandler(option, result.data));
		})
		.catch(error => {
			dispatch(searchHandler({ type: actionType.SEARCH_FETCH_ERROR }));

			console.error("error dispatching movie list ", { error });
		});
};
