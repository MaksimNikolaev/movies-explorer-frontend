import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className='about-project'>
      <h2 className='about-project__title'>О проекте</h2>
        <ul className='about-project__stage'>
          <li className='about-project__list'>
            <h3 className='about-project__subtitle'>Дипломный проект включал 5 этапов</h3>
            <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </li>
          <li className='about-project__list'>
            <h3 className='about-project__subtitle'>На выполнение диплома ушло 5 недель</h3>
            <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </li>
        </ul>
        <ul className='about-project__duration'>
          <li className='about-project__list'>
            <h3 className='about-project__weeks about-project__weeks_bgcolor-green'>1 неделя</h3>
            <p className='about-project__course'>Back-end</p>
          </li>
          <li className='about-project__list'>
            <h3 className='about-project__weeks about-project__weeks_bgcolor-grey'>4 недели</h3>
            <p className='about-project__course'>Front-end</p>
          </li>
        </ul>
    </section>
  )
};

export default AboutProject;
