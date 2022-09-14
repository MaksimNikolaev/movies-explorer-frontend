import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import './Main.css';
import Stack from '../Stack/Stack';
import Student from '../Student/Student';

const Main = () => {
  return (
    <div className='main'>
        <Header/>
        <Promo/>
        <AboutProject/>
        <Stack/>
        <Student/>
    </div>
  );
}

export default Main;
