import { useEffect } from 'react';
import Hero from '../components/Hero';
import ContactBar from '../components/ContactBar';
import AboutPreview from '../components/AboutPreview';
import Products from '../components/Products';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import { useScrollSpy } from '../hooks/useScrollSpy';

const Home = () => {
  const activeSection = useScrollSpy(['home', 'about', 'products', 'contact'], {
    threshold: 0.2,
    rootMargin: '0px 0px -20% 0px'
  });

  useEffect(() => {
    const titles = {
      home: 'AnnaSaar | Clean, Honest, Farm-to-Kitchen Spices',
      about: 'AnnaSaar | Our Roots & Story',
      products: 'AnnaSaar | Our Signature Spices',
      contact: 'AnnaSaar | Connect With Us'
    };

    if (activeSection && titles[activeSection]) {
      document.title = titles[activeSection];
    }
  }, [activeSection]);

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
