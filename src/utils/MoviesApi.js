import { MOVIES_URL } from "./constants";

class MoviesApi {
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

  getMovies() {
    return fetch(`${this._url}`, {
      headers: this._headers,
    }).then(this._errorHandler);
  }
}


const moviesApi = new MoviesApi({
  url: MOVIES_URL,
  headers: {
    //authorization: `Bearer ${localStorage.getItem('jwt')}`,
    "content-type": "application/json",
  },
});

export default moviesApi;