import { Link } from 'react-router-dom';
import './Promo.css';
import imgWeb from '../../images/Promo/text_web.png';

const Promo = () => {
  return (
    <section className='promo'>
      <h1 className='promo__title'>Учебный проект студента факультета Веб&#8209;разработки.</h1>
      <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <img className='promo__img' src={imgWeb} alt='Фотография планета с текстом web' />
      <Link to="#" className='promo__btn'>Узнать больше</Link>
    </section>
  )
}

export default Promo;
