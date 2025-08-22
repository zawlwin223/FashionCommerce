import '../style/hero.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import image1 from '../img/kisspng-tunic-clothing-free-people-dress-coat-png-bayan-resimleri-tubes-femes-png-woman-fotos-5d082eaa562755.1772136015608173223529.png'
import image2 from '../img/pngwingFahionBoy.png'
import image3 from '../img/pngwingMan1.png'
import image4 from '../img/pngwingWomanFashion.png'
import LinkButton from '../component/LinkButton'
import Slider from 'react-slick'

const heroText = [
  {
    title: 'New Season',
    mainText: 'Summer Collection<br/>Fresh & Stylish',
    subText: 'Discover the latest arrivals',
    img: image1,
  },
  {
    title: 'Men’s Fashion',
    mainText: 'Modern Styles<br/>Everyday Wear',
    subText: 'Elevate your wardrobe with ease',
    img: image2,
  },
  {
    title: 'Classic Look',
    mainText: 'Timeless Outfits<br/>For Every Occasion',
    subText: 'Style that never goes out of trend',
    img: image3,
  },
  {
    title: 'Women’s Fashion',
    mainText: 'Bold & Elegant<br/>Everyday Looks',
    subText: 'Find your perfect style today',
    img: image4,
  },
]

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
      <Slider {...settings} className="slider">
        {heroText.map((data, idx) => (
          <div key={idx}>
            <div className="hero_slider">
              <div className="hero_text">
                <p>{data.title}</p>
                <h1 dangerouslySetInnerHTML={{ __html: data.mainText }} />
                <p>{data.subText}</p>
                <LinkButton
                  path="/shop"
                  halfWidth={true}
                  className="hero_button">
                  Go To Shop
                </LinkButton>
              </div>
              <div className="hero_img_wrapper">
                <img
                  src={data.img}
                  className="hero_img"
                  alt={`Slide ${idx + 1}`}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  )
}
