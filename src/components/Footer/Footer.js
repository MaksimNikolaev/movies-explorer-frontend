import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <p className='footer__copyright'>© 2022</p>
      <ul className='footer__list'>
        <li className='footer__item'><a className='footer__link' href='https://practicum.yandex.ru/' target='blank'>Яндекс.Практикум</a></li>
        <li className='footer__item'><a className='footer__link' href='https://github.com/MaksimNikolaev' target='blank'>Github</a></li>
      </ul>
    </footer>
  )
};

export default Footer;
