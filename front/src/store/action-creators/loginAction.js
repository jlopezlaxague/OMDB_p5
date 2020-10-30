import axios from 'axios'
import React from 'react'
//import { Route, Redirect, Switch } from "react-router-dom";

export const loginUserAction = (loginUser) => (
    {
        type: 'LOGIN_USER',
        loggedUser : loginUser
    }
);

export const logoutUserAction = (log) => (
  {
      type: 'LOGOUT_USER',
      loggedUser : log
  }
);

export const loginUser = (credentials) => (dispatch) => {
  axios
    .post("/api/login", credentials)
    .then(res => res.data)
    .then(loggedUser => {
    dispatch(loginUserAction({email: loggedUser.email, id: loggedUser.id}))      
  })
}

export const logoutUser = () => (dispatch) => {
  axios
    .post("/api/logout")
    .then( () => {
    dispatch(logoutUserAction({
      email: "",
      id: ""
    }))      
  })
}

export const logedUserRefresh = () => (dispatch) => {
  axios
    .get("/api/userslogged")
    .then(loggedUser => {
      dispatch(loginUserAction({email: loggedUser.data.email, id: loggedUser.data.id}))      
    })
}

