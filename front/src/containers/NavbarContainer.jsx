import React from 'react'
import { connect } from "react-redux";
import store from '../store/store';

import Navbar from '../components/Navbar'

import { logoutUser } from '../store/action-creators/loginAction'

const mapStateToProps = function(state, ownProps) {
    return {
        loggedUser: state.loggedUser
    };
};

const mapDispatchToProps = function(dispatch){
    return{
        logoutUser: () => dispatch(logoutUser()),
    }
}

class NavbarContainer extends React.Component {
    constructor() {
        super();
        this.handleSubmitLogout = this.handleSubmitLogout.bind(this);
    }

    handleSubmitLogout (evt) {
        evt.preventDefault()
        this.props.logoutUser()
    }
  
  render () {
        return(
            <div>
                 <Navbar 
                    loggedUser = {this.props.loggedUser}
                    handleSubmitLogout = {this.handleSubmitLogout}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)