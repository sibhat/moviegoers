import * as actionType from "./actionType";

const initialState = {
	SEND: false,
	currentChoiceMovie: null,
	movie: []
};
export default (state = initialState, action) => {
	switch (action.type) {
		case actionType.CATEGORY:
			console.log("movie", action.payload);
			return { ...state, currentChoiceMovie: action.payload };
		case actionType.GET_MOVIE:
			return { ...state, SEND: true, movie: action.payload };
		default:
			return state;
	}
};
