import React from 'react'
import { connect } from "react-redux";
import Favs from '../components/Favs'
import store from '../store/store'

import {searchFavourites} from '../store/action-creators/filmsActions'

const mapStateToProps = function(state, ownProps) {
  return {
      favs: state.films.favs,
      loggedUser: state.loggedUser
  };
};

const mapDispatchToProps = function(dispatch){
  return{
    searchFavourites: (data) => dispatch(searchFavourites(data))
  }
}

class FavsContainer extends React.Component {
  constructor(props){
    super(props);
    this.handleUserFavourites = this.handleUserFavourites.bind(this);
    //this.state = store.getState();
  }

  handleUserFavourites (data) {
    this.props.searchFavourites(data)
}  
  
  render () {
    console.log("props.favs", this.props.favs)
    //console.log("state.films", this.state.films)
    //console.log("state.favs", this.state.films.favs)
        return(
            <div>
                 <Favs 
                    favs = {this.props.favs}
                    loggedUser = {this.props.loggedUser}
                    handleUserFavourites = {this.handleUserFavourites} 
                />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavsContainer)