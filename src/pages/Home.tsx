import Hero from '../sections/Hero/Hero';
import FeaturedWork from '../sections/FeaturedWork/FeaturedWork';
import About from '../sections/About/About';
import Services from '../sections/Services/Services';
import Gallery from '../sections/Gallery/Gallery';
import Testimonials from '../sections/Testimonials/Testimonials';
import Journal from '../sections/Journal/Journal';
import Contact from '../sections/Contact/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <Gallery />
      <Services />
      <Testimonials />
      <Journal />
      <About />
      <Contact />
    </>
  );
}
