import axios from "axios";
import * as actionType from "./actionType";

const movieDetailHandler = movies => ({
	type: actionType.GET_MOVIE,
	payload: movies
});
const categoryRequestHandler = data => ({
	type: actionType.CATEGORY,
	payload: data
});

export const getMovieDetail = (option, id) => dispatch => {
	axios
		.get(
			`https://api.themoviedb.org/3/${option}/${id}?api_key=${
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

export const listenCategory = (option, choice) => dispatch => {
	dispatch({ type: `REQUEST movie ${choice} SEND` });
	axios
		.get(
			`https://api.themoviedb.org/3/${option}/${choice}/videos?api_key=${
				process.env.REACT_APP_MOVIEDB_API
			}&language=en-US&page=3`
		)
		.then(result => {
			dispatch({ type: `REQUEST movie ${choice} SUCCESS` });
			dispatch(categoryRequestHandler(result.data));
		})
		.catch(() => {
			dispatch({ type: `REQUEST ${choice} FAILD` });
		});
};
