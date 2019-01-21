import * as actionType from "./actionType";

const initialState = {
	option: {
		All: {
			id: 0,
			name: "All"
		},
		TV: {
			id: 1,
			name: "TV"
		},
		Movies: {
			id: 2,
			name: "Movies"
		},
		currentChoice: 0
	},
	category: {
		Movies: [
			{ url: "now_playing", display: "Now Playing", id: 3 },
			{ url: "top_rated", display: "Top Rated", id: 4 },
			{ url: "popular", display: "Popular", id: 5 },
			{ url: "upcomming", display: "Up Comming", id: 6 }
		],
		TV: [
			{ url: "top_rated", display: "Top Rated", id: 7 },
			{ url: "popular", display: "Popular", id: 8 },
			{ url: "on_the_air", display: "On The Air", id: 9 },
			{ url: "airing_today", display: "Airing Today", id: 10 }
		]
	},
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
		case actionType.UPDATE_OPTION:
			let option = {
				...state.option,
				currentChoice: action.payload
			};
			return {
				...state,
				option
			};
		case actionType.CONFIG_DB:
			return {
				...state,
				requesting: true,

				base_url: action.payload.images.base_url,
				size: action.payload.images.poster_sizes,
				request: false
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
			return {
				...state,
				request: true,
				movies: action.payload,
				requesting: false
			};
		default:
			return state;
	}
};
