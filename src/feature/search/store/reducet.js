import * as actionType from "./actionType";

const initialState = {
	fetching: false,
	fetch_succes: false,
	fetch_error: false,
	searchResultsTv: [],
	searchResultsMovies: []
};
export default (state = initialState, action) => {
	switch (action.type) {
		case actionType.SEARCH_FETCHING:
			return { ...state, fetching: true };
		case actionType.SEARCH_TV_FETCH:
			return {
				...state,
				fetching: false,
				fetch_succes: true,
				searchResultsTv: action.payload
			};
		case actionType.SEARCH_MOVIE_FETCH:
			return {
				...state,
				fetching: false,
				fetch_succes: true,
				searchResultsMovies: action.payload
			};
		case actionType.SEARCH_FETCH_ERROR:
			return {
				...state,
				fetching: false,
				fetch_succes: false,
				fetch_error: true
			};
		default:
			return state;
	}
};
