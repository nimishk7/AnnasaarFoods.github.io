import { motion } from 'framer-motion';
import Testimonials from './Testimonials';



const TestimonialsSection = () => {
  return (
    <div className="bg-primary pt-10 overflow-hidden relative">
      <div className="mb-10 text-center">
        <h3 className="text-turmeric text-3xl font-semibold tracking-widest uppercase mb-2">Testimonials</h3>
      </div>
      <Testimonials />
    </div>
  );
};

export default TestimonialsSection;
