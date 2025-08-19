import '../style/contact.css'
export default function Contact() {
  return (
    <>
      <section className="contact">
        <div className="address">
          <h3>Logo</h3>
          <h4>Contact</h4>
          <address>
            <p>
              <strong>Address</strong>:G62 Washiton 14 Street
            </p>

            <p>
              <strong>phone</strong>:+0224456
            </p>

            <p>
              <strong>House</strong>:No15 87 Building
            </p>
          </address>
        </div>
        <div className="contact_about">
          <h3>About Us</h3>
          <p>Delivery Information</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Contact Us</p>
        </div>
        <div className="myAccount">
          <h3>Sign</h3>
          <p>View Cart</p>
          <p>My Wishlist</p>
          <p>Track My Order</p>
          <p>Help</p>
        </div>
        <div className="installApp">
          <h3>Install App</h3>
          <p>From App Store or Google Play</p>
        </div>
        <footer className="footer">
          <p>&copy 2024 Zaw Lwin Phyo's Fashion Commerce</p>
        </footer>
      </section>
    </>
  )
}
