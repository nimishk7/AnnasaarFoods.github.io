import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Smita Kulkarni",
    role: "Happy Customer",
    feedback: "The Goda Masala is exactly like my grandmother used to make. Pure, aromatic, and full of love! It brings back so many memories of home-cooked meals."
  },
  {
    id: 2,
    name: "Rahul Sharma",
    role: "Happy Customer",
    feedback: "I've never seen turmeric this vibrant. The curcumin level is definitely high. Best for daily health and it actually makes a difference in our morning routine."
  },
  {
    id: 3,
    name: "Anjali Patil",
    role: "Happy Customer",
    feedback: "The Kanda Lasun Masala adds that perfect authentic touch to my misal. Home away from home! It's the secret ingredient my kitchen was missing."
  },
  {
    id: 4,
    name: "Vikram Deshmukh",
    role: "Happy Customer",
    feedback: "Cleanest spices I've ever bought. No dust, no colors, just pure flavor from the farm. You can really feel the difference in the texture and aroma."
  },
  {
    id: 5,
    name: "Sneha More",
    role: "Happy Customer",
    feedback: "AnnaSaar is now my go-to for all pantry staples. Purity you can actually taste and smell. It's rare to find such honesty in food products these days."
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000); // 6 seconds
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  return (
    <div className="relative py-16 flex flex-col items-center justify-center overflow-hidden min-h-[400px]">
      {/* Background Decorative Quote */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-5 pointer-events-none">
        <FaQuoteLeft size={200} className="text-turmeric" />
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center"
          >
            {/* Customer Identity */}
            <div className="flex flex-col items-center mb-8">
              <h4 className="text-white text-2xl md:text-3xl font-bold tracking-tight mb-2 font-heading">
                {testimonials[index].name}
              </h4>
              <span className="text-turmeric text-sm font-semibold uppercase tracking-[0.3em]">
                {testimonials[index].role}
              </span>
            </div>

            {/* Feedback Text */}
            <blockquote className="text-xl md:text-2xl font-body font-light text-cream/80 italic leading-relaxed max-w-2xl px-4">
              "{testimonials[index].feedback}"
            </blockquote>
            
            {/* Progress indicators */}
            <div className="flex gap-2 mt-12">
              {testimonials.map((_, i) => (
                <div 
                  key={i}
                  className={`h-1 transition-all duration-500 rounded-full ${i === index ? 'w-8 bg-turmeric' : 'w-2 bg-white/20'}`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Testimonials;
