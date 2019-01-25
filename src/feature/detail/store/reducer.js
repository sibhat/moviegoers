import * as actionType from "./actionType";

const initialState = {
	request_success: false,
	request_error: false,
	request_pending: false,
	result: [],
	recommendedResult: []
};
export default (state = initialState, action) => {
	switch (action.type) {
		case actionType.GET_MOVIE_REQUEST:
			return { ...state, request_pending: true };
		case actionType.GET_MOVIE_RESULT:
			return {
				...state,
				request_success: true,
				request_pending: false,
				result: action.payload
			};
		case actionType.GET_RECOMMENDATION:
			return {
				...state,
				request_success: true,
				request_pending: false,
				recommendedResult: action.payload
			};
		default:
			return state;
	}
};
