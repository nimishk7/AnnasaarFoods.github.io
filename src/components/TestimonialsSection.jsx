import { motion } from 'framer-motion';
import Testimonials from './Testimonials';



const SlidingGallery = () => {
  return (
    <div className="bg-primary pt-10 pb-20 overflow-hidden relative">
      <div className="mb-10 text-center">
        <h3 className="text-turmeric text-sm font-semibold tracking-widest uppercase mb-2">Our Customers</h3>
        <h2 className="text-3xl font-heading font-bold text-cream">Happy Faces</h2>
      </div>
      <Testimonials />
    </div>
  );
};

export default SlidingGallery;
