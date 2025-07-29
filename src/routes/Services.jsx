import React from 'react';
import Hero from '../components/Hero';
import Navitems from '../components/Navitems';
import CardSection from '../components/CardSection';
import AboutImage from '../assets/night.jpg'

function Services() {
  return (
    <>
      <Navitems />
      <Hero
            cName="mid"
            img={AboutImage}
            title="Services"
            Btnclass="hidde"
          />
      <CardSection />
    </>
  );
}

export default Services;
