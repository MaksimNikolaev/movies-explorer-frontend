import useValidationForms from '../../hooks/useValidationForms';
import Header from '../Header/Header';
import './Profile.css';

const Profile = () => {
  const { handleChange, errors, isValid } = useValidationForms();
  const spanErrorClassName = `${!isValid && "form__input-error"}`;
  return (
    <div className='main'>
      <Header isBlue={false} isLoggedIn={true}/>
      <section className='profile'>
        <h1 className='profile__title'>Привет, Виталий!</h1>
        <form className='profile__form' method='POST'>
          
            <label htmlFor='profile__name' className='profile__label profile__name'>Имя
            <input  type='text' 
                    id='profile__name'
                    className='profile__input' 
                    defaultValue='Виталий' 
                    placeholder='Введите имя'
                    onChange={handleChange}
                    required>
              
            </input></label> 
          
          
            <label htmlFor='profile__email' className='profile__label'>E&#8209;mail
            <input  type='email'
                    id='profile__email'
                    className='profile__input profile__email'
                    defaultValue='pochta@yandex.ru'
                    placeholder='Введите почту'
                    onChange={handleChange}
                    required>
            </input></label>             
         
          <button type='submit' className='profile__submit-edit'>Редактировать</button>
          <button type='submit' className='profile__submit-exit'>Выйти из аккаунта</button>
        </form>
      </section>
    </div>
  )
}

export default Profile;