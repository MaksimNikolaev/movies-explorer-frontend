import './infoTooltip.css';

const InfoTooltip = ({isOpen, onClose, message}) => {
  return (
    <div className={`info-tooltip ${isOpen && 'info-tooltip_opened'}`} >
      <div className="info-tooltip__content">
        <button
          type="button"
          className="info-tooltip__close"
          aria-label="Закрыть попап"
          onClick={onClose}
        ></button>
        <h2 className="info-tooltip__text">
          {message}  
        </h2>        
      </div>
    </div>
  )
}

export default InfoTooltip;