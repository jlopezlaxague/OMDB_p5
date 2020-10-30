import axios from 'axios'

export const setFilms = (filmArray) => (
    {
        type: 'SET_FILMS',
        films : filmArray
    }
);

export const setSingleFilm = (singleFilm) => (
  {
      type: 'SET_FILM',
      selectedFilm : singleFilm
  }
);

export const setUserFavs = (favs) => (
  {
      type: 'SET_FAVS',
      favs : favs
  }
);

export const searchFilmByName = (bus) => (dispatch) =>
  axios
    .get(`http://www.omdbapi.com/?apikey=41a11ed1&s=${bus}`)
    .then(res => res.data)
    .then(film => {
      dispatch(setFilms(film))
});

export const searchFilmById = (bus) => (dispatch) =>
  axios
    .get(`http://www.omdbapi.com/?apikey=41a11ed1&i=${bus}`)
    .then(res => res.data)
    .then(film => {
      dispatch(setSingleFilm(film))
});

export const addToFavourites = (data) => {
  axios
    .post("/api/favourites", data)
    /* .then(data => {
      console.log("axios Favourites", data)
      //dispatch(loginUserAction({email: loggedUser.data.email, id: loggedUser.data.id}))      
    }) */
}

export const searchFavourites = (data) => (dispatch) => {
  axios
    .post(`/api/searchfavourites`, data)
    .then(res => res.data)
    //.then((res) => console.log("respuesta", res))
    .then(favs => {
      dispatch(setUserFavs(favs))
  });

}
