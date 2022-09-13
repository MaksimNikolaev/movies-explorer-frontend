import { Link } from 'react-router-dom';
import Title from '../Title/Title'
import './Stack.css'

const Stack = () => {
  return (
    <section className='stack'>
      <Title section='Технологии'/>
      <div className='stack__container'>
        <h3 className='stack__title'>7 технологий</h3>
        <p className='stack__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className='stack__list'>
          <li className='stack__item'>
            <a href='https://ru.wikipedia.org/wiki/HTML' className='stack__link' target='_blank'>HTML</a>
          </li>
          <li className='stack__item'>
            <a href='https://ru.wikipedia.org/wiki/CSS' className='stack__link' target='_blank'>CSS</a>
          </li>
          <li className='stack__item'>
            <a href='https://ru.wikipedia.org/wiki/JavaScript' className='stack__link' target='_blank'>JS</a>
          </li>
          <li className='stack__item'>
            <a href='https://ru.wikipedia.org/wiki/React' className='stack__link' target='_blank'>React</a>
          </li>
          <li className='stack__item'>
            <a href='https://ru.wikipedia.org/wiki/Git' className='stack__link' target='_blank'>Git</a>
          </li>
          <li className='stack__item'>
            <a href='https://ru.wikipedia.org/wiki/Express_(%D1%84%D1%80%D0%B5%D0%B9%D0%BC%D0%B2%D0%BE%D1%80%D0%BA)' className='stack__link' target='_blank'>Express.js</a>
          </li>
          <li className='stack__item'>
            <a href='https://ru.wikipedia.org/wiki/MongoDB' className='stack__link' target='_blank'>mongoDB</a>
          </li>
        </ul>
        </div>
    </section>
  )
}

export default Stack;
