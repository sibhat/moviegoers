import axios from "axios";
import * as actionType from "./actionType";

const movieDetailHandler = movies => ({
	type: actionType.GET_MOVIE,
	payload: movies
});

export const getMovieDetail = id => dispatch => {
	axios
		.get(
			`https://api.themoviedb.org/3/movie/${id}?api_key=${
				process.env.REACT_APP_MOVIEDB_API
			}&language=en-US&page=3`
		)
		.then(result => {
			console.log({ result });
			dispatch(movieDetailHandler(result.data));
		})
		.catch(error => {
			console.error("error dispatching movie list ", { error });
		});
};
