import * as actionType from "./actionType";

const initialState = {
	SEND: false,
	movies: []
};
export default (state = initialState, action) => {
	switch (action.type) {
		case actionType.LIST_MOVIES:
			return { ...state, SEND: true, movies: action.payload };
		default:
			return state;
	}
};
