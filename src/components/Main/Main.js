import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import './Main.css';
import Stack from '../Stack/Stack';

const Main = () => {
  return (
    <div className='main'>
        <Header/>
        <Promo/>
        <AboutProject/>
        <Stack/>
    </div>
  );
}

export default Main;
