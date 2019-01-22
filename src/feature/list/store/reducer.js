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
			{
				url: "now_playing",
				display: "Now Playing",
				id: 3,
				now_playing: []
			},
			{
				url: "top_rated",
				display: "Top Rated Movies",
				id: 4,
				top_rated: []
			},
			{ url: "popular", display: "Popular Movies", id: 5, popular: [] },
			{
				url: "upcoming",
				display: "Up Comming Movies",
				id: 6,
				upcoming: []
			}
		],
		TV: [
			{
				url: "top_rated",
				display: "Top Rated TV Shows",
				id: 7,
				top_rated: []
			},
			{ url: "popular", display: "Popular TV Shows", id: 8, popular: [] },
			{
				url: "on_the_air",
				display: "On The Air TV Shows",
				id: 9,
				on_the_air: []
			},
			{
				url: "airing_today",
				display: "Airing Today TV Shows",
				id: 10,
				airing_today: []
			}
		]
	},
	genres: {
		Movie: [],
		TV: []
	},
	pending: false,
	request_success: false,
	base_url: "",
	size: ""
};
export default (state = initialState, action) => {
	let category;
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
			category = { ...state.category };
			category["Movie"][0]["now_playing"] = action.payload;
			return {
				...state,
				pending: false,
				category,
				request_success: true
			};
		case actionType.TOP_RATED_MOVIE:
			category = { ...state.category };
			category["Movie"][1]["top_rated"] = action.payload;
			return {
				...state,
				pending: false,
				category,
				request_success: true
			};
		case actionType.TOP_RATED_TV:
			category = { ...state.category };
			category["TV"][0]["top_rated"] = action.payload;
			return {
				...state,
				pending: false,
				category,
				request_success: true
			};

		case actionType.POPULAR_MOVIE:
			category = { ...state.category };
			category["Movie"][2]["popular"] = action.payload;
			return {
				...state,
				pending: false,
				category,
				request_success: true
			};
		case actionType.POPULAR_TV:
			category = { ...state.category };
			category["TV"][1]["popular"] = action.payload;
			return {
				...state,
				pending: false,
				category,
				request_success: true
			};
		case actionType.AIRING_TODAY:
			category = { ...state.category };
			category["TV"][3]["airing_today"] = action.payload;
			return {
				...state,
				pending: false,
				category,
				request_success: true
			};
		case actionType.ON_THE_AIR:
			category = { ...state.category };
			category["TV"][2]["on_the_air"] = action.payload;
			return {
				...state,
				pending: false,
				category,
				request_success: true
			};
		case actionType.UPCOMING:
			category = { ...state.category };
			category["Movie"][3]["upcoming"] = action.payload;
			return {
				...state,
				pending: false,
				category,
				request_success: true
			};

		case actionType.GENRE_TV_LIST:
			return {
				...state,
				request_success: true,
				genres: {
					Movie: { ...state.genres.Movie },
					TV: action.payload
				},
				pending: false
			};
		case actionType.GENRE_MOVIE_LIST:
			return {
				...state,
				request_success: true,
				genres: { TV: { ...state.genres.TV }, Movie: action.payload },
				pending: false
			};
		default:
			return state;
	}
};
