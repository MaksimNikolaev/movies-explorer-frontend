import { BASE_URL } from "./constants";

class MainApi {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _errorHandler(res) {
    if (res.ok) {
      return res.json();
    }
    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  createMovies(movies,token) {
    return fetch(`${this._url}movies`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization" : `Bearer ${token}`
      },
      body: JSON.stringify({
          country: movies.country,
          director: movies.director,
          duration: movies.duration,
          year: movies.year,
          description: movies.description,
          image: 'https://api.nomoreparties.co' + movies.image.url,
          trailerLink: movies.trailerLink,
          thumbnail: 'https://api.nomoreparties.co' + movies.image.formats.thumbnail.url,
          movieId: movies.id,
          nameRU: movies.nameRU,
          nameEN: movies.nameEN,
      }),
    }).then(this._errorHandler);
  }

  removeMovies(movies, token) {
    return fetch(`${this._url}movies/${movies._id}`, {
      method: "DELETE",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization" : `Bearer ${token}`
      },
    }).then(this._errorHandler);
  }

  register (name, email, password) {
    return fetch(`${this._url}signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, email, password})
    })
    .then(this._errorHandler);
  }; 

  authorize ( email, password ) {
    return fetch(`${this._url}signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password})
    })
    .then(this._errorHandler)
  }; 

  getContent (token) {
    return fetch(`${this._url}users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization" : `Bearer ${token}`
      }   
    })
    .then(this._errorHandler)
  }

  updateProfile(name, email) {
    return fetch(`${this._url}users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(this._errorHandler);
  }

  getSaveMovies (token) {
    return fetch(`${this._url}movies`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization" : `Bearer ${token}`
      }   
    })
    .then(this._errorHandler)
  }

}

const mainApi = new MainApi({
  url: BASE_URL,
  headers: {
    authorization: `Bearer ${localStorage.getItem('jwt')}`,
    "content-type": "application/json",
  },
});

export default mainApi;