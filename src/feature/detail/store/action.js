import axios from "axios";
import * as actionType from "./actionType";

const movieDetailHandler = movies => ({
	type: actionType.GET_MOVIE_RESULT,
	payload: movies
});
const movieRecommendationsHandler = movies => ({
	type: actionType.GET_RECOMMENDATION,
	payload: movies
});

export const getMovieDetail = (option, id) => dispatch => {
	dispatch({ type: actionType.GET_MOVIE_REQUEST });
	return axios
		.get(
			`https://api.themoviedb.org/3/${option}/${id}?api_key=${
				process.env.REACT_APP_MOVIEDB_API
			}&language=en-US`
		)
		.then(result => {
			dispatch(movieDetailHandler(result.data));
		})
		.catch(error => {
			dispatch({ type: actionType.GET_MOVIE_ERROR, payload: error });
		});
};
export const getMovieRecommendation = (option, id) => dispatch => {
	dispatch({ type: actionType.GET_MOVIE_REQUEST });
	axios
		.get(
			`https://api.themoviedb.org/3/${option}/${id}/recommendations?api_key=${
				process.env.REACT_APP_MOVIEDB_API
			}&language=en-US&page=1`
		)
		.then(result => {
			dispatch(movieRecommendationsHandler(result.data));
		})
		.catch(error => {
			dispatch({ type: actionType.GET_MOVIE_ERROR, payload: error });
		});
};
