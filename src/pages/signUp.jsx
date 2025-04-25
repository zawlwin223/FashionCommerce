import '../style/signup.css'
export default function SignUp() {
  return (
    <section className="signUp">
      <div>
        <h3>Sign Up For Newsletters</h3>
        <p>
          Get E-mail updates about our latest shop and{' '}
          <span>special offers.</span>
        </p>
      </div>
      <form action="">
        <input type="email" placeholder="Enter your email" />
        <button>Sign Up</button>
      </form>
    </section>
  )
}
