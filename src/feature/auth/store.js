import * as actionTypes from "./actionType"
const initialState = {
    token:{
        expires: "",
        request_token: null,
        success: false,
        error: false
    },
    session:{},
    token_send: false,
    token_success: false,
    token_pending: false,
    session_send: false,
    session_success: false,
    session_error: false,
    user_authorize: false,
};
export default  (state=initialState, action) =>{
    switch (action.type) {
        case actionTypes.REQUEST_TOKEN_SEND:
            return {...state, token_send: true };
        case actionTypes.REQUEST_TOKEN_SUCCESS:{
            return {...state, token: action.payload, token_send: false};
        }
        case actionTypes.REQUEST_TOKEN_ERROR:
            return {...state, token_send: false, token: {
                    expires: "",
                    token: null,
                    success: false,
                    error: action.payload
                },};
        case actionTypes.REQUEST_SESSION_SEND:
            return {...state, session_send: true};
        case actionTypes.REQUEST_SESSION_SUCCESS:
            localStorage.setItem("uId", action.payload.session_id);
            return {...state, session: action.payload,session_send: true  };
        case actionTypes.REQUEST_SESSION_ERROR:
            return {...state, session_send: false, session:{}, session_error: action.payload};
        case actionTypes.LOGOUT:
            return { ...state,  token:{
                    expires: "",
                    request_token: null,
                    success: false,
                    error: false
                },
                session:{},
                token_send: false,
                token_success: false,
                token_pending: false,
                session_send: false,
                session_success: false,
                session_error: false,
                user_authorize: false,
            };
        default:
            return {...state}
    }
}

