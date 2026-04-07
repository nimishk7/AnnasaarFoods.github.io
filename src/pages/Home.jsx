import Hero from '../components/Hero';
import ContactBar from '../components/ContactBar';
import AboutPreview from '../components/AboutPreview';
import Products from '../components/Products';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <div className="bg-primary min-h-screen">
      <Hero />
      <ContactBar />
      <AboutPreview />
      <Products />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
