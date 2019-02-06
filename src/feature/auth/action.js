import * as actionTypes from "./actionType";
import axios from "axios";

const getTokenHandler = token =>({
    type: actionTypes.REQUEST_TOKEN_SUCCESS,
    payload: token
});
const getTokenError = error =>({
    type: actionTypes.REQUEST_TOKEN_ERROR,
    payload: error.data ? error.data : error
});
const getAuthHandler = session =>({
    type: actionTypes.REQUEST_SESSION_SUCCESS,
    payload: session
});
const getAuthError = error =>({
    type: actionTypes.REQUEST_SESSION_ERROR,
    payload: error.data ? error.data : error
});
const getSessionHandler = session =>({
    type: actionTypes.REQUEST_SESSION_SUCCESS,
    payload: session
});
const getSessionError = error =>({
    type: actionTypes.REQUEST_SESSION_ERROR,
    payload: error.data ? error.data : error
});
export const getToken = () => dispatch =>{
    dispatch({type: actionTypes.REQUEST_TOKEN_SEND});
    axios.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=${process.env.REACT_APP_MOVIEDB_API}`)
        .then(result => dispatch(getTokenHandler(result.data)))
        .catch(error => dispatch(getTokenError(error)))
};
// authorizeToken getSession
const authorizeToken = data=> dispatch =>{
    dispatch({type: actionTypes.REQUEST_SESSION_SEND});
    axios.post(`https://api.themoviedb.org/3/authentication/session/new?api_key=${process.env.REACT_APP_MOVIEDB_API}`, data)
        .then(result =>
            // dispatch(getAuthHandler(result.data))
            dispatch(getSessionHandler(result.data))
        )
        .catch(error =>
            // dispatch(getAuthError(error))
            dispatch(getSessionError(error))
        );
};
export const getSession = data => dispatch =>{
    dispatch({type: actionTypes.REQUEST_AUTHORIZE_SEND});
    // dispatch({type: actionTypes.REQUEST_SESSION_SEND});
    axios.post(`https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${process.env.REACT_APP_MOVIEDB_API}`, data)
        .then(result => {
            // dispatch(getAuthHandler(result.data));
            console.log({result});
            result.data.success && authorizeToken({request_token: result.data.request_token})(dispatch);
        })
        .catch(error =>
            // dispatch(getSessionError(error))
            dispatch(getAuthError(error))
        );
};
export const logout = () => dispatch =>{
    dispatch({type: actionTypes.LOGOUT})
};
