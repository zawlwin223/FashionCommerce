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
        {/* Slide 1 */}
        <div>
          <div className="hero_slider">
            <div>
              <p>New Season</p>
              <h1>
                Summer Collection <br />
                Fresh & Stylish
              </h1>
              <p>Discover the latest arrivals</p>
              <LinkButton path="/shop" halfWidth={true}>
                Go To Shop
              </LinkButton>
            </div>
            <div>
              <img src={image1} alt="Summer Collection" className="hero_img" />
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div>
          <div className="hero_slider">
            <div>
              <p>Men’s Fashion</p>
              <h1>
                Modern Styles <br />
                Everyday Wear
              </h1>
              <p>Elevate your wardrobe with ease</p>
              <LinkButton path="/shop" halfWidth={true}>
                Go To Shop
              </LinkButton>
            </div>
            <div>
              <img src={image2} className="hero_img" alt="Men's Fashion" />
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div>
          <div className="hero_slider">
            <div>
              <p>Classic Look</p>
              <h1>
                Timeless Outfits <br />
                For Every Occasion
              </h1>
              <p>Style that never goes out of trend</p>
              <LinkButton path="/shop" halfWidth={true}>
                Go To Shop
              </LinkButton>
            </div>
            <div>
              <img src={image3} className="hero_img" alt="Classic Style" />
            </div>
          </div>
        </div>

        {/* Slide 4 */}
        <div>
          <div className="hero_slider">
            <div>
              <p>Women’s Fashion</p>
              <h1>
                Bold & Elegant <br />
                Everyday Looks
              </h1>
              <p>Find your perfect style today</p>
              <LinkButton path="/shop" halfWidth={true}>
                Go To Shop
              </LinkButton>
            </div>
            <div>
              <img src={image4} className="hero_img" alt="Women's Fashion" />
            </div>
          </div>
        </div>
      </Slider>
    </section>
  )
}
