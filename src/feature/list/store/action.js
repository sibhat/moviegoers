import axios from "axios";
import * as actionType from "./actionType";

const movieListHandler = movies => ({
	type: actionType.LIST_MOVIES,
	payload: movies
});

export const getMovieList = () => dispatch => {
	axios
		.get(
			`https://api.themoviedb.org/3/movie/now_playing?api_key=${
				process.env.REACT_APP_MOVIEDB_API
			}&language=en-US&page=3`
		)
		.then(result => {
			console.log({ result });
			dispatch(movieListHandler(result.data));
		})
		.catch(error => {
			console.error("error dispatching movie list ", { error });
		});
};
