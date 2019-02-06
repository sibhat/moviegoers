import React, {Component} from "react";
import AuthP from "./AuthPresentation";
import {getToken, getSession, logout} from "./action";
import {connect} from "react-redux";

class Auth extends Component {
    constructor(props){
        super(props);
        this.state={
            authOpen: false,
            username: "",
            password: ""
        }
    }
    inputChangeHandler = e => {
        this.setState(
             {[e.target.name]: e.target.value}
        )
    };
    toggleOpen = () =>{
        this.setState((prevState, props) =>{
            return {authOpen: !prevState.authOpen}
        });
        this.props.getToken();
    };
    login = (e) => {
        e.preventDefault();
        // this.toggleOpen();
        let data = {
            username: this.state.username,
            password: this.state.password,
            request_token: this.props.request_token
        };
        // console.log(data)
        this.props.getSession(data);
    };
    logoutHandler = () =>{
        this.props.logout();
    };
    render(){

        return(
            <AuthP user_authorize={this.props.user_authorize}
                   login={this.login} logout={this.logoutHandler}
                   inputChange={this.inputChangeHandler}
                   open={this.state.authOpen}
                   toggle={this.toggleOpen}/>
        )
    }
}
const MapStateToProps = state =>({
    user_authorize: state.auth.session,
    request_token: state.auth.token.request_token
});
export default connect(MapStateToProps, {getToken, getSession, logout})(Auth);