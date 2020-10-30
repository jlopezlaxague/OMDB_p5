const initialState = {}
  
  export default (state = initialState, action) => {
    switch(action.type) {
      case 'LOGIN_USER':
        return Object.assign({}, state, action.loggedUser );
      case 'LOGOUT_USER':
        return Object.assign({}, state, action.loggedUser );
      default:
        return state;
    }
  }