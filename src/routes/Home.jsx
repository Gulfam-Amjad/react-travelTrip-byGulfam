import Hero from '../components/Hero'
import Navitems from '../components/Navitems'
import heroImage from '../assets/12.jpg'
import Distination from '../components/distination'
import AboutSection from '../components/AboutSection';
import CardSection from '../components/CardSection';
import ContactSection from '../components/ContactSection';


function Home() {
  return (
    <>
      <Navitems />

      <Hero
        cName="hero"
        img={heroImage}
        title="Start your Journey from Here"
        text="Life is short, so enjoy it!"
        url="/"
        Btnclass="show"
        Btntext="Plan Trip"
      />
      <Distination />
      <AboutSection />
      <CardSection />
      <ContactSection />
    </>
  )
}

export default Home
