import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from "./myComponents/MyNav";
import "./index.css";
import MyCarousel from './myComponents/MyCarousel';
import CompText from './myComponents/CompText';
import TourDates from './myComponents/TourDates';
import Contact from './myComponents/Contact';
import Map from './myComponents/Map';
import Footer from './myComponents/Footer';


function App() {
  return (
    <div className='App'>
        <MyNav/>

        <MyCarousel/>

        <CompText/>

        <TourDates/>

        <Contact className="contactContainer"/>

        <Map/>

        <Footer/>
    </div>

  )
}

export default App;
