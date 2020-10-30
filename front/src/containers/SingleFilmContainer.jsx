import React from 'react'
import { connect } from "react-redux";
import store from '../store/store';

import SingleFilm from '../components/SingleFilm'

import {searchFilmById} from '../store/action-creators/filmsActions'

const mapStateToProps = function(state, ownProps) { //setea en el props todo lo que viene del state (del store de redux)
  return {
    selectedFilm: state.films.selectedFilm
  };
};

const mapDispatchToProps = function(dispatch){ //setea en el props funciones que dispatchean acciones
  return{
    searchFilmById: (value) => dispatch(searchFilmById(value)), //ahora dispatchea
  }
}

class SingleFilmContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = store.getState();
  }

  componentDidMount() {
    this.props.searchFilmById(this.props.match.params.id)
  }  
  
  render () {
    console.log(this.state)
        return(
            <div>
                 <SingleFilm 
                    selectedFilm = {this.props.selectedFilm} 
                />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleFilmContainer)