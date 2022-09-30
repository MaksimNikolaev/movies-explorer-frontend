import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Form.css";

const Form = ({ id, title, children, text, link, textLink }) => {
  return (
    <div className="form__container">
      <form className={`${id}__form form`} id={id}>
        <Logo />
        <h1 className="form__title">{title}</h1>
        {children}
      </form>
      <p className="form__text">
        {text}
        <Link to={link} className="form__link">
          {textLink}
        </Link>
      </p>
    </div>
  );
};

export default Form;
