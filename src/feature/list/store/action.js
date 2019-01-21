import axios from "axios";
import * as actionType from "./actionType";
let choices = {
	now_playing: "NOW_PLAYING",
	top_rated: "TOP_RATED",
	latest: "LATEST",
	popular: "POPULAR",
	upcoming: "UPCOMING"
};

const movieListHandler = (movies, action) => ({
	type: action,
	payload: movies
});
const configHandler = movies => ({
	type: actionType.CONFIG_DB,
	payload: movies
});

export const config = () => dispatch => {
	dispatch({ type: `REQUEST config SEND` });
	axios
		.get(
			`https://api.themoviedb.org/3/configuration?api_key=${
				process.env.REACT_APP_MOVIEDB_API
			}&language=en-US&page=3`
		)
		.then(result => {
			dispatch({ type: `REQUEST config SUCCESSED` });
			dispatch(configHandler(result.data));
		})
		.catch(() => {
			dispatch({ type: `REQUEST config FAILED` });
		});
};
export const getMovieList = (category, option = "movie") => dispatch => {
	dispatch({ type: `REQUEST ${category} SEND` });
	axios
		.get(
			`https://api.themoviedb.org/3/${option}/${category}?api_key=${
				process.env.REACT_APP_MOVIEDB_API
			}&language=en-US&page=3`
		)
		.then(result => {
			dispatch({ type: `REQUEST ${category} SUCCESSED` });
			dispatch(movieListHandler(result.data, choices[category]));
		})
		.catch(error => {
			dispatch({ type: `REQUEST ${category} FAILED` });

			console.error("error dispatching movie list ", { error });
		});
};
export const currentOptionHandler = id => dispatch => {
	dispatch({
		type: actionType.UPDATE_OPTION,
		payload: id
	});
};
