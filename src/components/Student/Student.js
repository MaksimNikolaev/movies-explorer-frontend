import Title from '../Title/Title';
import './Student.css';
import photo from '../../images/Student/student.jpeg';
import Portfolio from '../Portfolio/Portfolio';

const Student = () => {
  return (
    <section className='student'>
      <Title section='Студент'/>
      <div className='student__info'>
        <h3 className='student__name'>Максим</h3>
        <p className='student__job'>Фронтенд-разработчик, 30 лет</p>
        <p className='student__description'>Я работаю и живу в г.Стерлитамак. Так как мне нравится программирование,
        решил пойти в сферу фронтенд разработки. Фронтенд разработка нравится тем, что написав пару строчек кода, уже
        можно увидеть результат своей работы в веб браузере. Текущий год я выполнял различные задачи на обучении от
        Яндекс Практикума. Обучение осуществлялось с наставником и проекты регулярно проходили ревью, поэтому я получил
        огромный опыт. Люблю активный отдых, поездки, путешествия, уделяю свободное время обучению.</p>
        <ul className='student__contact'>
          <li className='student__item'><a className='student__contact-link' href='https://github.com/MaksimNikolaev'>Github</a></li>
          <li className='student__item'><a className='student__contact-link' href='https://t.me/NikolaevMaks'>Telegram</a></li>
          <li className='student__item'><a className='student__contact-link' href='https://vk.com/id170680365'>Вконтакте</a></li>
        </ul>
        <img className='student__photo' src={photo} alt='Моя фотография'/>
      </div>
      <Portfolio/>
    </section>
  )
};

export default Student;
