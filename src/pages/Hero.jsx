import '../style/hero.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import image1 from '../img/kisspng-tunic-clothing-free-people-dress-coat-png-bayan-resimleri-tubes-femes-png-woman-fotos-5d082eaa562755.1772136015608173223529.png'
import image2 from '../img/pngwingFahionBoy.png'
import image3 from '../img/pngwingMan1.png'
import image4 from '../img/pngwingWomanFashion.png'
import LinkButton from '../component/LinkButton'

import Slider from 'react-slick'
export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  }
  return (
    <section className="hero">
      <Slider {...settings}>
        <div>
          <div className="hero_slider">
            <div>
              <p>Trad-in-off</p>
              <h1>
                Super value deals <br />
                On all products
              </h1>
              <p>Save more with coupon &70 % off</p>

              <LinkButton path="/shop" halfWidth={true}>
                Go To Shop
              </LinkButton>
            </div>
            <div>
              <img src={image1} alt="" className="hero_img" />
            </div>
          </div>
        </div>
        <div>
          <div className="hero_slider">
            <div>
              <p>Trad-in-off</p>
              <h1>
                Super value deals <br />
                On all products
              </h1>
              <p>Save more with coupon &70 % off</p>

              <LinkButton path="/shop" halfWidth={true}>
                Go To Shop
              </LinkButton>
            </div>
            <div>
              <img src={image2} className="hero_img" alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="hero_slider">
            <div>
              <p>Trad-in-off</p>
              <h1>
                Super value deals <br />
                On all products
              </h1>
              <p>Save more with coupon &70 % off</p>

              <LinkButton path="/shop" halfWidth={true}>
                Go To Shop
              </LinkButton>
            </div>
            <div>
              <img src={image3} className="hero_img" alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="hero_slider">
            <div>
              <p>Trad-in-off</p>
              <h1>
                Super value deals <br />
                On all products
              </h1>
              <p>Save more with coupon &70 % off</p>

              <LinkButton path="/shop" halfWidth={true}>
                Go To Shop
              </LinkButton>
            </div>
            <div>
              <img src={image4} className="hero_img" alt="" />
            </div>
          </div>
        </div>
      </Slider>
    </section>
  )
}
