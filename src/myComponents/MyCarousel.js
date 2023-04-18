import Carousel from 'react-bootstrap/Carousel';
import slider1 from "../assets/slider1.jpg"
import slider2 from "../assets/slider2.jpg"
import slider3 from "../assets/slider3.jpg"
import "./styleComp.css"

const MyCarousel = ()=>{
    return(
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider1}
          alt="First slide"
        />
        <Carousel.Caption className='carouselCaption'>
          <h3>Los Angeles</h3>
          <p>We had the best time playing at Venice Beach!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider2}
          alt="Second slide"
        />

        <Carousel.Caption className='carouselCaption'>
          <h3>New York</h3>
          <p>The atmosphere in New York is lorem ipsum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider3}
          alt="Third slide"
        />

        <Carousel.Caption className='carouselCaption'>
          <h3>Chicago</h3>
          <p>
          Thank you, Chicago - A night we won't forget.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        );
}

export default MyCarousel;