import './Navigation.css';
import iconProfile from '../../images/icons/profile.svg'
import { NavLink, Route } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        <li className='navigation__item'>
          <NavLink to="/movies" className={({isActive}) =>`${isActive ? 'navigation__link navigation__link_active' : 'navigation__link'}`}>Фильмы</NavLink>
        </li>
        <li className='navigation__item'>
          <NavLink to="/saved-movies" className={({isActive}) =>`${isActive ? 'navigation__link navigation__link_active' : 'navigation__link'}`}>Сохранённые фильмы</NavLink>
        </li>
        <li className='navigation__item'>
          <NavLink to="/profile" className={({isActive}) =>`${isActive ? 'navigation__link navigation__link_active' : 'navigation__link'}`}>
            <p className='navigation__account'>Аккаунт</p>
            <img src={iconProfile} alt='Иконка профиля' className='navigation__icon'/>          
          </NavLink>
        </li> 
      </ul>
    </nav>       
  )
}

export default Navigation;