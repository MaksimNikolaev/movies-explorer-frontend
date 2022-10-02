import './NotFound.css';
import { useNavigate  } from 'react-router-dom'; 

const NotFound = () => {
  const navigate = useNavigate ();
  return (
    <div className="main">
      <section className='not-found'>
        <h2 className="not-found__title">404</h2>
        <p className="not-found__text">Страница не найдена</p>
        <button className="not-found__button" type="button" onClick={() => navigate(-1)}>Назад</button>
      </section>
    </div>
  )
}

export default NotFound;