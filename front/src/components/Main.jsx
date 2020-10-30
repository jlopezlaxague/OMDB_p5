import React from 'react'
import { Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";

import FilmsContainer from '../containers/FilmsContainer'
import SingleFilmContainer from '../containers/SingleFilmContainer'
import RegisterContainer from '../containers/RegisterContainer'
import LoginContainer from '../containers/LoginContainer'
import NavbarContainer from '../containers/NavbarContainer'
import FavsContainer from '../containers/FavsContainer'

import {logedUserRefresh} from '../store/action-creators/loginAction'

const mapStateToProps = function(state, ownProps) {
    return {
    };
};

const mapDispatchToProps = function(dispatch){
    return{
        logedUserRefresh: (user) => dispatch(logedUserRefresh(user)),
    }
}

class Main extends React.Component { 
    componentDidMount () {
        this.props.logedUserRefresh()
    }
  
  render () {
        return(
            <div>
                <NavbarContainer/>
                <Switch>
                    <Route exact path="/films" component = {FilmsContainer} />
                    <Route exact path="/films/register" component = {RegisterContainer} />
                    <Route exact path="/films/login" component = {LoginContainer} />
                    <Route path="/films/:id" component = {SingleFilmContainer} />
                    <Route path="/user/favs" component = {FavsContainer} />
                    <Redirect from="/" to="/films"/>
                </Switch>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)