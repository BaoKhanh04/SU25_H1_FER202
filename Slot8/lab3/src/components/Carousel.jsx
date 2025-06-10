import Carousel from 'react-bootstrap/Carousel';
import carousel_1 from '../assets/images/carousel_1.jpg';
import carousel_2 from '../assets/images/carousel_2.jpg';
import carousel_3 from '../assets/images/carousel_3.jpg';

function AppCarousel() {
  return (
    <div style={{width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw'}}>
      <Carousel fade interval={5000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel_1}
            alt="Neapolitan Pizza"
            style={{height: '480px', objectFit: 'cover'}}
          />
          <Carousel.Caption
            className="carousel-caption"
            style={{
              textAlign: 'center',
              left: 0,
              right: 0,
              maxWidth: '100%',
              width: '100%',
              bottom: '20%',
              top: 'unset',
              transform: 'none'
            }}
          >
            <h3 className="display-4 fw-bold">Neapolitan Pizza</h3>
            <p className="lead fs-5">
              Known for traditional Italian pizza, the Neapolitan is the original pizza. This delicious pie dates all
              the way back to 18th century in Naples, Italy.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel_2}
            alt="Margherita Pizza"
            style={{height: '480px', objectFit: 'cover'}}
          />
          <Carousel.Caption
            className="carousel-caption"
            style={{
              textAlign: 'center',
              left: 0,
              right: 0,
              maxWidth: '100%',
              width: '100%',
              bottom: '20%',
              top: 'unset',
              transform: 'none'
            }}
          >
            <h3 className="display-4 fw-bold">Margherita Pizza</h3>
            <p className="lead fs-5">
              A classic Italian pizza topped with fresh tomatoes, mozzarella cheese, fresh sweet basil, salt and
              extra-virgin olive oil.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel_3}
            alt="Pepperoni Pizza"
            style={{height: '480px', objectFit: 'cover'}}
          />
          <Carousel.Caption
            className="carousel-caption"
            style={{
              textAlign: 'center',
              left: 0,
              right: 0,
              maxWidth: '100%',
              width: '100%',
              bottom: '20%',
              top: 'unset',
              transform: 'none'
            }}
          >
            <h3 className="display-4 fw-bold">Pepperoni Pizza</h3>
            <p className="lead fs-5">
              America's favorite pizza topped with pepperoni, mozzarella cheese and our signature pizza sauce.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default AppCarousel;
