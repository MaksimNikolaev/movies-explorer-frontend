import './MoreButton.css';

const MoreButton = ({moviesArray, handleMoreSubmit, countMoviesOfScreens}) => {
  if (moviesArray.length > countMoviesOfScreens) {
    return (
      <div className="more-button__container">
        <button className="more-button__button" type="button" onClick={handleMoreSubmit}>Еще</button>
      </div>
    )
  }
}

export default MoreButton;