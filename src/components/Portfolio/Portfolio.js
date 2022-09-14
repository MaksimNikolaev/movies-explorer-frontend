import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <a className='portfolio__link' href='https://github.com/MaksimNikolaev/how-to-learn' target='blank'>Статичный сайт
            <span className='portfolio__span-img'></span>
          </a>
        </li>
        <li className='portfolio__item'>
          <a className='portfolio__link' href='https://github.com/MaksimNikolaev/russian-travel' target='blank'>Адаптивный сайт
            <span className='portfolio__span-img'></span>
          </a>
        </li>
        <li className='portfolio__item'>
          <a className='portfolio__link' href='https://github.com/MaksimNikolaev/react-mesto-api-full' target='blank'>Одностраничное приложение
            <span className='portfolio__span-img'></span>
          </a>
        </li>
      </ul>

    </div>
  )
}

export default Portfolio;
