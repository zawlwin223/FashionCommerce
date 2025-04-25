import '../style/service.css'
import image1 from '../img/pngwing.com (4).png'
import image2 from '../img/pngwing.com (6).png'
import image3 from '../img/pngwing.com (2).png'
import image4 from '../img/pngwing.com (3).png'
import image5 from '../img/pngegg (13).png'
import image6 from '../img/pngwing.com (5).png'
export default function Service() {
  return (
    <>
      <section className="service">
        <div className="card">
          <img src={image1} alt="" />
          <div>
            <p>Free Shiping</p>
          </div>
        </div>
        <div className="card">
          <img src={image2} alt="" />
          <div>
            <p>Online Order</p>
          </div>
        </div>
        <div className="card">
          <img src={image3} alt="" />
          <div>
            <p>Save Money</p>
          </div>
        </div>
        <div className="card">
          <img src={image4} alt="" />
          <div>
            <p>Promotion</p>
          </div>
        </div>
        <div className="card">
          <img src={image5} alt="" />
          <div>
            <p>Happy Sell</p>
          </div>
        </div>
        <div className="card">
          <img src={image6} alt="" />
          <div>
            <p>24/7 Support</p>
          </div>
        </div>
      </section>
    </>
  )
}
