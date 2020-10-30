import React from 'react'
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Login from '../components/Login'
import { loginUser } from '../store/action-creators/loginAction'


const mapStateToProps = function(state, ownProps) {
    return {
        loggedUser: state.loggedUser
    };
};

const mapDispatchToProps = function(dispatch){
    return{
        loginUser: (user) => dispatch(loginUser(user)),
    }
}

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
      }

    handleSubmit (evt) {
        evt.preventDefault()
        this.props.loginUser({email: this.state.email, password: this.state.password})
    }

    handleChangeUser (evt) {
        this.setState({email: evt.target.value})
    }

    handleChangePassword (evt) {
        this.setState({password: evt.target.value})
    }
    
    render () {        

        if(this.props.loggedUser.email){
            this.props.history.push("/films")
        }

        return(
            <div>
                <Login 
                    handleSubmit={this.handleSubmit}
                    handleChangeUser={this.handleChangeUser}
                    handleChangePassword={this.handleChangePassword}
                />                
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)