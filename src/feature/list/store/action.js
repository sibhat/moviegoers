import axios from "axios";
import * as actionType from "./actionType";
let connectOptionWithActionType = {
	now_playing: actionType.NOW_PLAYING,
	top_rated: actionType.TOP_RATED,
	latest: actionType.LATEST,
	popular: actionType.POPULAR,
	upcoming: actionType.UPCOMING,
	airing_today: actionType.AIRING_TODAY,
	on_the_air: actionType.ON_THE_AIR
};

const movieListHandler = (action, movies) => ({
	type: connectOptionWithActionType[action],
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
export const getMovieList = (option = "movie", url) => dispatch => {
	dispatch({ type: `REQUEST ${url} SEND` });
	axios
		.get(
			`https://api.themoviedb.org/3/${option}/${url}?api_key=${
				process.env.REACT_APP_MOVIEDB_API
			}&language=en-US&page=3`
		)
		.then(result => {
			dispatch({ type: `REQUEST ${url} SUCCESSED` });
			dispatch(movieListHandler(url, result.data));
		})
		.catch(() => {
			dispatch({ type: `REQUEST ${url} FAILED` });
			// console.error("error dispatching movie list ", { error });
		});
};

export const currentOptionHandler = id => dispatch => {
	dispatch({
		type: actionType.UPDATE_OPTION,
		payload: id
	});
};
