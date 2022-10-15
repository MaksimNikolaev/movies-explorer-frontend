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

const REG_EXP_NAME = '^[A-Za-zА-Яа-яЁё /s -]+$';
const REG_EXP_EMAIL = '[a-z0-9._-]+@[a-z0-9.-]+\\.[a-z]{2,}$';

export { BASE_URL, MOVIES_URL, SHORT_MOVIES_DURATION, DEVICE_PARAMS, REG_EXP_NAME, REG_EXP_EMAIL };