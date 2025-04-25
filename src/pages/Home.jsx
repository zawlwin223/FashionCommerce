import '../style/home.css'
import Hero from './Hero'
import Service from './Service'
import RepairService from './RepairService'
export default function Home() {
  return (
    <>
      <section className="home_page">
        <Hero></Hero>
        <Service></Service>
        {/* <RepairService></RepairService> */}
      </section>
    </>
  )
}
