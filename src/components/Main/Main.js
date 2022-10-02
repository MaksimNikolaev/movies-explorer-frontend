import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import "./Main.css";
import Stack from "../Stack/Stack";
import Student from "../Student/Student";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <>
      <Header isBlue={true} isLoggedIn={false} />
      <main className="main">
        <Promo />
        <AboutProject />
        <Stack />
        <Student />
      </main>
      <Footer />
    </>
  );
};

export default Main;
