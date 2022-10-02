import './MoreButton.css';

const MoreButton = ({moviesArray}) => {
  if (moviesArray.length > 3) {
    return (
      <div className="more-button__container">
        <button className="more-button__button" type="button">Еще</button>
      </div>
    )
  }
}

export default MoreButton;