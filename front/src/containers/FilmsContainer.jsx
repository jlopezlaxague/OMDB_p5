import React from 'react'
import { connect } from "react-redux";

import Films from '../components/Films'
import {searchFilmByName, addToFavourites} from '../store/action-creators/filmsActions'


const mapStateToProps = function(state, ownProps) { //setea en el props todo lo que viene del state (del store de redux)
    return {
        films: state.films.films,
        loggedUser: state.loggedUser
    };
};

const mapDispatchToProps = function(dispatch){ //setea en el props funciones que dispatchean acciones
    return{
        searchFilmByName: (value) => dispatch(searchFilmByName(value)), //ahora dispatchea
    }
}

class FilmsContainer extends React.Component {
    constructor() {
        super();
        this.state = {
          value: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange(evt) {
        const value = evt.target.value;
        this.setState({
          value: value,
        });
      }
    
      handleSubmit(evt) {
        evt.preventDefault();
        this.props.searchFilmByName(this.state.value)
      }

    handleSubmitFavourites(data) {
      addToFavourites(data)
    }
    
    render () {
        return(
            <div> 
                <Films 
                    searchFilmByName = {this.props.searchFilmByName} 
                    films = {this.props.films} 
                    handleChange = {this.handleChange}
                    handleSubmit = {this.handleSubmit}
                    handleSubmitFavourites = {this.handleSubmitFavourites}
                    loggedUser = {this.props.loggedUser}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmsContainer)