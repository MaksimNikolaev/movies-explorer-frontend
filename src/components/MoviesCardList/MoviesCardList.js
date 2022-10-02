import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';


const MoviesCardList = ({moviesArray}) => {
  return (
    <section className='movies-card'>
      <ul className="movies-card__list">
          {moviesArray.map((item) => {
            return (
              <MoviesCard
                key={item.id}
                img={item.photo}
                alt={item.name}
                name={item.name}
                duration={item.duration}
                isSaved={item.isSaved}
              />
            );
          })}
        </ul>
    </section>
  )
}

export default MoviesCardList;