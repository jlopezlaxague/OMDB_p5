
const initialState = {
  films: {},
  selectedFilm: {},
  favs: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'SET_FILMS':
      return Object.assign({}, state, { films: action.films });
    case 'SET_FILM':
      return Object.assign({}, state, { selectedFilm: action.selectedFilm });
    case 'SET_FAVS':
      return Object.assign({}, state, { favs: action.favs });
    default:
      return state;
  }
}