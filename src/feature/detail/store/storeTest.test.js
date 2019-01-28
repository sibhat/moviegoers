import * as actions from "./action";
import * as types from "./actionType";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import fetchMock from "fetch-mock";
import expect from "expect";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let detailMovieMockReturnResult = {
	adult: false,
	backdrop_path: "/nl79FQ8xWZkhL3rDr1v2RFFR6J0.jpg",
	belongs_to_collection: null,
	budget: 13200000,
	genres: [
		{
			id: 35,
			name: "Comedy"
		},
		{
			id: 18,
			name: "Drama"
		},
		{
			id: 10749,
			name: "Romance"
		}
	],
	homepage: null,
	id: 19404,
	imdb_id: "tt0112870",
	original_language: "hi",
	original_title: "दिलवाले दुल्हनिया ले जायेंगे",
	overview:
		"Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
	popularity: 15.775,
	poster_path: "/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg",
	production_companies: [
		{
			id: 1569,
			logo_path: "/5WSkzUe6OiyKlpX2hJUghLlWkiU.png",
			name: "Yash Raj Films",
			origin_country: "IN"
		}
	],
	production_countries: [
		{
			iso_3166_1: "IN",
			name: "India"
		}
	],
	release_date: "1995-10-20",
	revenue: 100000000,
	runtime: 190,
	spoken_languages: [
		{
			iso_639_1: "hi",
			name: "हिन्दी"
		}
	],
	status: "Released",
	tagline: "Come Fall In love, All Over Again..",
	title: "Dilwale Dulhania Le Jayenge",
	video: false,
	vote_average: 9.1,
	vote_count: 1967
};
describe("actions", () => {
	afterEach(() => {
		fetchMock.restore();
	});
	it("creates GET_MOVIE_RESULT when fetching detail movie has been done", () => {
		fetchMock.getOnce("movie/19404", {
			headers: { "content-type": "application/json" }
		});

		const expectedActions = [
			{ type: types.GET_MOVIE_REQUEST },
			{
				payload: detailMovieMockReturnResult,
				type: types.GET_MOVIE_RESULT
			}
		];
		const store = mockStore({
			request_success: false,
			request_error: false,
			request_pending: false,
			result: [],
			recommendedResult: []
		});

		return store
			.dispatch(actions.getMovieDetail("movie", "19404"))
			.then(result => {
				// return of async actions
				expect(store.getActions(result)).toEqual(expectedActions);
			});
	});
});
