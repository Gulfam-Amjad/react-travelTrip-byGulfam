import Hero from '../components/Hero'
import Navitems from '../components/Navitems'
import AboutImage from '../assets/2.jpg'
import ContactSection from '../components/ContactSection';

function Contact() {
  return (
       <>
          <Navitems />
          <Hero
            cName="mid"
            img={AboutImage}
            title="Contact US"
            Btnclass="hidde"
          />
          <ContactSection />
        </>
  )
}

export default Contact