import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import './Main.css';

const Main = () => {
  return (
    <div className='main'>
        <Header/>
        <Promo/>
        <AboutProject/>
    </div>
  );
}

export default Main;
