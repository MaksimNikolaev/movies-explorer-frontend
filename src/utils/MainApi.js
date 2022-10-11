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

  createMovies(data) {
    return fetch(`${this._url}movies`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
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
}

const mainApi = new MainApi({
  url: "https://api.films.nomoredomains.sbs/",
  headers: {
    authorization: `Bearer ${localStorage.getItem('jwt')}`,
    "content-type": "application/json",
  },
});

export default mainApi;