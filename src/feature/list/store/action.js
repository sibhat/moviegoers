import axios from "axios";
import * as actionType from "./actionType";

let connectOptionWithActionType = {
	"movie/now_playing": actionType.NOW_PLAYING,
	"movie/top_rated": actionType.TOP_RATED_MOVIE,
	"tv/top_rated": actionType.TOP_RATED_TV,
	"movie/popular": actionType.POPULAR_MOVIE,
	"tv/popular": actionType.POPULAR_TV,
	"movie/upcoming": actionType.UPCOMING,
	"tv/airing_today": actionType.AIRING_TODAY,
	"tv/on_the_air": actionType.ON_THE_AIR,
	"genre/movie": actionType.GENRE_MOVIE_LIST,
	"genre/tv": actionType.GENRE_TV_LIST
};

const movieListHandler = (action, result) => ({
	type: connectOptionWithActionType[action],
	payload: result
});
const configHandler = movies => ({
	type: actionType.CONFIG_DB,
	payload: movies
});

const genreHandler = (action, result) => ({
	type: connectOptionWithActionType[action],
	payload: result
});

export const config = () => dispatch => {
	dispatch({ type: `REQUEST Config SEND` });
	axios
		.get(
			`https://api.themoviedb.org/3/configuration?api_key=${
				process.env.REACT_APP_MOVIEDB_API
			}&language=en-US&page=3`
		)
		.then(result => {
			dispatch({ type: `REQUEST Config SUCCESSED` });
			dispatch(configHandler(result.data));
		})
		.catch(() => {
			dispatch({ type: `REQUEST config FAILED` });
		});
};
export const genres = option => dispatch => {
	dispatch({ type: `REQUEST GENRE SEND` });
	axios
		.get(
			`https://api.themoviedb.org/3/${option}/list?api_key=${
				process.env.REACT_APP_MOVIEDB_API
			}&language=en-US&page=3`
		)
		.then(result => {
			dispatch({ type: `REQUEST GENRE SUCCESSED` });
			dispatch(genreHandler(option, result.data));
		})
		.catch(() => {
			dispatch({ type: `REQUEST GENRE FAILED ${option}` });
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
			dispatch(movieListHandler(`${option}/${url}`, result.data));
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
