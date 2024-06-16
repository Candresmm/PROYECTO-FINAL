import Carousel from 'react-bootstrap/Carousel';

function Karusel(props) {
  return (
    
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className='kartext'>te ayudamos en {props.que}</h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 className='kartext'>un lugar para {props.para}</h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 className='kartext'>instituto {props.name}</h5>
          <p>
            
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Karusel;