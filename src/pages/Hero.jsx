import '../style/hero.css'

import image from '../img/kisspng-tunic-clothing-free-people-dress-coat-png-bayan-resimleri-tubes-femes-png-woman-fotos-5d082eaa562755.1772136015608173223529.png'
import LinkButton from '../component/LinkButton'
export default function Hero() {
  return (
    <>
      <section className="hero">
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
          <img src={image} alt="" />
        </div>
      </section>
    </>
  )
}
