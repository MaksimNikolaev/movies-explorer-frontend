import Header from '../Header/Header';
import './Profile.css';

const Profile = () => {
  return (
    <div className='main'>
      <Header isBlue={false} isLoggedIn={true}/>
      <section className='profile'>
        <h1 className='profile__title'>Привет, Виталий!</h1>
        <form className='profile__form' method='POST'>
          <div className='profile__group'>
            <label htmlFor='profile__name' className='profile__label profile__name'>Имя</label>
            <input  type='text' 
                    id='profile__name'
                    className='profile__input' 
                    defaultValue='Виталий' 
                    placeholder='Введите имя'>
            </input> 
          </div>
          <div className='profile__group'>
            <label htmlFor='profile__email' className='profile__label'>E&#8209;mail</label>
            <input  type='email'
                    id='profile__email'
                    className='profile__input profile__email'
                    defaultValue='pochta@yandex.ru'
                    placeholder='Введите почту'>
            </input>             
          </div>
          <button type='submit' className='profile__submit-edit'>Редактировать</button>
          <button type='submit' className='profile__submit-exit'>Выйти из аккаунта</button>
        </form>
      </section>
    </div>
  )
}

export default Profile;