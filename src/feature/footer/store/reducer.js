import * as actionType from "./actionType";

const initialState = {
	CATEGORY: "default"
};
export default (state = initialState, action) => {
	switch (action.type) {
		case actionType.CATEGORY:
			return { ...state, CATEGORY: action.payload };
		default:
			return state;
	}
};
