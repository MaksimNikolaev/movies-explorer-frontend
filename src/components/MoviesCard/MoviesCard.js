import './MoviesCard.css'

const MoviesCard = ({img, alt, name, duration, isSaved}) => {
  return (
    <li className="movies-card__item">
      <img src={img} className='movies-card__img' alt={alt} />
      <div className='movies-card__info'>
        <h2 className='movies-card__name'>{name}</h2>
        <p className='movies-card__duration'>{duration}</p>
      </div>
      <button className={`movies-card__btn ${isSaved ? 'movies-card__btn_type_active' : 'movies-card__btn_type_inactive'}`} type='button'>Сохранить</button>
    </li>
  )
}

export default MoviesCard;