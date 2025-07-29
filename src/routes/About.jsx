import Hero from '../components/Hero'
import Navitems from '../components/Navitems'
import AboutImage from '../assets/night.jpg'
import AboutSection from '../components/AboutSection';

function About() {
  return (
    <>
          <Navitems />
          <Hero
            cName="mid"
            img={AboutImage}
            title="About"
            Btnclass="hidde"
          />
          <AboutSection />
        </>
  )
}

export default About