import Hero from '../sections/Hero/Hero';
import FeaturedWork from '../sections/FeaturedWork/FeaturedWork';
import About from '../sections/About/About';
import Services from '../sections/Services/Services';
import Workflow from '../sections/Workflow/Workflow';
import Testimonials from '../sections/Testimonials/Testimonials';
import Journal from '../sections/Journal/Journal';
import Contact from '../sections/Contact/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <About />
      <Services />
      <Workflow />
      <Testimonials />
      <Journal />
      <Contact />
    </>
  );
}
