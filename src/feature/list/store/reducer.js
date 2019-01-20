import * as actionType from "./actionType";

const initialState = {
	requesting: false,
	request: false,
	base_url: "",
	size: "",
	latest_movies: [],
	nowPlaying_movies: [],
	popular_movies: [],
	topRated_movies: [],
	upComing_movies: []
};
export default (state = initialState, action) => {
	switch (action.type) {
		case actionType.CONFIG_DB:
			return {
				...state,
				base_url: action.payload.images.base_url,
				size: action.payload.images.poster_sizes,
				request: true
			};
		case actionType.NOW_PLAYING:
			return {
				...state,
				requesting: false,
				nowPlaying_movies: action.payload,
				request: true
			};
		case actionType.TOP_RATED:
			return {
				...state,
				requesting: false,
				topRated_movies: action.payload,
				request: true
			};
		case actionType.LATEST:
			return {
				...state,
				requesting: false,
				latest_movies: action.payload,
				request: true
			};
		case actionType.POPULAR:
			return {
				...state,
				requesting: false,
				popular_movies: action.payload,
				request: true
			};
		case actionType.UPCOMING:
			return {
				...state,
				requesting: false,
				upComing_movies: action.payload,
				request: true
			};
		case actionType.LIST_MOVIES:
			return { ...state, request: true, movies: action.payload };
		default:
			return state;
	}
};
