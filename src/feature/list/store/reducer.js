import * as actionType from "./actionType";

const initialState = {
	option: {
		0: {
			id: 0,
			name: "All"
		},
		1: {
			id: 1,
			name: "TV"
		},
		2: {
			id: 2,
			name: "Movie"
		},
		currentChoice: 0
	},
	category: {
		Movie: [
			{ url: "now_playing", display: "Now Playing", id: 3 },
			{ url: "top_rated", display: "Top Rated", id: 4 },
			{ url: "popular", display: "Popular", id: 5 },
			{ url: "upcoming", display: "Up Comming", id: 6 }
		],
		TV: [
			{ url: "top_rated", display: "Top Rated", id: 7 },
			{ url: "popular", display: "Popular", id: 8 },
			{ url: "on_the_air", display: "On The Air", id: 9 },
			{ url: "airing_today", display: "Airing Today", id: 10 }
		]
	},
	pending: false,
	request_success: false,
	base_url: "",
	size: "",
	latest_movies: [],
	now_playing: [],
	popular: [],
	top_rated: [],
	upcoming: [],
	on_the_air: [],
	airing_today: []
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
				pending: true,
				base_url: action.payload.images.base_url,
				size: action.payload.images.poster_sizes,
				request_success: false
			};
		case actionType.NOW_PLAYING:
			return {
				...state,
				pending: false,
				now_playing: action.payload,
				request_success: true
			};
		case actionType.TOP_RATED:
			return {
				...state,
				pending: false,
				top_rated: action.payload,
				request_success: true
			};
		case actionType.LATEST:
			return {
				...state,
				pending: false,
				latest_movies: action.payload,
				request_success: true
			};
		case actionType.POPULAR:
			return {
				...state,
				pending: false,
				popular: action.payload,
				request_success: true
			};
		case actionType.AIRING_TODAY:
			return {
				...state,
				pending: false,
				airing_today: action.payload,
				request_success: true
			};
		case actionType.ON_THE_AIR:
			return {
				...state,
				pending: false,
				on_the_air: action.payload,
				request_success: true
			};
		case actionType.UPCOMING:
			return {
				...state,
				pending: false,
				upcoming: action.payload,
				request_success: true
			};
		case actionType.LIST_MOVIES:
			return {
				...state,
				request_success: true,
				latest_movies: action.payload,
				pending: false
			};
		default:
			return state;
	}
};
