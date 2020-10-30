import React from 'react'
import axios from 'axios'

import Register from '../components/Register'

class RegisterContainer extends React.Component {
    constructor() {
        super();
        this.state = {
          email: "",
          password: "",
          registerSuccess: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
      }

      handleSubmit (evt) {
          evt.preventDefault()
          console.log("En reister container", this.state)
          axios
            .post("/api/register", this.state)
            .then(()=>console.log("usuario creado"))
            .then(() => this.setState({registerSuccess: true}))
            .then(()=>console.log("usuario creado success"))  
      }

    handleChangeUser (evt) {
        console.log(evt.target.value)
        this.setState({email: evt.target.value})
    }

    handleChangePassword (evt) {
        console.log(evt.target.value)
        this.setState({password: evt.target.value})
    }    
    
    render () {
        return(
            <div>
                <Register 
                    handleSubmit={this.handleSubmit}
                    handleChangeUser={this.handleChangeUser}
                    handleChangePassword={this.handleChangePassword}
                    registerSuccess = {this.state.registerSuccess}
                />                
            </div>
        )
    }
}

export default RegisterContainer