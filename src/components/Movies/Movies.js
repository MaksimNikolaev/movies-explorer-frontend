import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Movies.css'

const Movies = () => {
  return (
    <div className='main'>
        <Header isBlue={false} isLoggedIn={true}/>

        <Footer/>
    </div>
  );
}

export default Movies;
