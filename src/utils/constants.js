const BASE_URL = 'https://api.films.nomoredomains.sbs/';
const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';
const SHORT_MOVIES_DURATION = 40;
const DEVICE_PARAMS = {
  desktop: {
    width: 1920,
    movies: {
      initilalQuantity: 12,
      inc: 3,
    },
  },
  tablet: {
    width: 1280,
    movies: {
      initilalQuantity: 8,
      inc: 2,
    },
  },
  mobile: {
    width: 768,
    movies: {
      initilalQuantity: 5,
      inc: 2,
    },
  },
};

export { BASE_URL, MOVIES_URL, SHORT_MOVIES_DURATION, DEVICE_PARAMS };