import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

import haladImg from '../assets/halad.jpeg';
import godaMasalaImg from '../assets/goda masala.jpeg';
import kandaLasunImg from '../assets/kanda lasun.jpeg';

const products = [
  {
    id: 1,
    name: 'Organic Turmeric',
    description: 'Golden, aromatic, high-curcumin turmeric from Sangli. Sun-dried, stone-ground, zero colours, zero preservatives. This is not just haldi—it’s medicine from soil. 🌱',
    image: haladImg,
    price: 'Pure & Potent',
    accent: '#FFB800',
    index: '01'
  },
  {
    id: 2,
    name: 'Homemade Goda Masala',
    description: "Maharashtrian kitchens' pride. Soft, sweet notes, roasted spices, rich aroma—perfect for everyday cooking. Add it to varan, aloo bhaji, usal, amti... and taste home in every bite.",
    image: godaMasalaImg,
    price: 'Authentic Blend',
    accent: '#D4A017',
    index: '02'
  },
  {
    id: 3,
    name: 'Homemade Kanda Lasun Masala',
    description: "Bold. Spicy. Emotional. This masala takes you straight to a Marathi aaji's kitchen. Perfect for misal, sabzis, bharit, bhaji, curries—a little goes a long way.",
    image: kandaLasunImg,
    price: 'Bold & Spicy',
    accent: '#E65100',
    index: '03'
  }
];

const Products = () => {
  const containerRef = useRef(null);
  const targetRef = useRef(null); // The section that scrolls vertically
  const [isMobile, setIsMobile] = useState(false);

  // Check viewport size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Desktop transformations
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);
  
  // Background color interpolation for desktop
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    ["#0B0B0B", "#1A140B", "#1A140B", "#0B0B0B"]
  );

  // Render mobile view
  if (isMobile) {
    return (
      <section id="products" className="py-20 bg-primary overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-20 right-[-10%] w-64 h-64 rounded-full bg-turmeric blur-[100px]"></div>
          <div className="absolute bottom-20 left-[-10%] w-64 h-64 rounded-full bg-earth blur-[100px]"></div>
        </div>

        <div className="text-center mb-10 px-6 relative z-10">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-turmeric text-sm font-semibold tracking-[0.2em] uppercase mb-2 font-body"
          >
            Signature Selections
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-heading font-bold text-cream mb-4"
          >
            Authentic Spices
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-24 h-[2px] bg-turmeric mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6 pb-12 space-x-6 relative z-10">
          {products.map((p) => (
            <div 
              key={p.id} 
              className="snap-center shrink-0 w-[85vw] max-w-sm flex flex-col glass rounded-3xl overflow-hidden shadow-2xl border border-white/5"
            >
              <div className="w-full h-72 relative overflow-hidden group">
                <img 
                  src={p.image} 
                  alt={p.name} 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <div className="absolute top-4 left-4 text-turmeric/80 text-4xl font-heading opacity-50 font-bold">
                  {p.index}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow bg-white/5 backdrop-blur-sm">
                <h3 className="text-2xl font-heading font-bold text-cream mb-3 leading-tight">{p.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{p.description}</p>
                <div className="flex justify-between items-center pt-6 border-t border-white/10">
                  <span className="text-turmeric font-bold text-lg">{p.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center space-x-2 mt-4">
          {products.map((p, idx) => (
            <div key={idx} className="w-1.5 h-1.5 rounded-full bg-turmeric/30"></div>
          ))}
        </div>
      </section>
    );
  }

  // Desktop horizontal scroll implementation
  return (
    <section id="products" ref={targetRef} className="relative h-[300vh] bg-primary overflow-clip">
      <motion.div 
        style={{ backgroundColor: bgColor }}
        className="sticky top-0 h-screen w-full flex items-center overflow-hidden transition-colors duration-700"
      >
        {/* Section Title - Fixed overlay */}
        <div className="absolute top-12 p-2 left-12 z-20 mix-blend-difference">
          <h3 className="text-turmeric text-sm font-semibold tracking-[0.3em] uppercase mb-2 font-body">Our Offerings</h3>
          <h2 className="text-6xl font-heading font-bold text-cream">Signature Spices</h2>
        </div>

        <motion.div style={{ x }} className="flex">
          {products.map((p) => (
            <div key={p.id} className="w-screen h-screen flex-shrink-0 flex items-center justify-center relative px-24">
              
              {/* Product Background Number */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
                <h2 className="text-[40rem] font-heading font-bold leading-none text-white">
                  {p.index}
                </h2>
              </div>

              <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
                {/* Image Side with Parallax/Hover effect */}
                <div className="w-full lg:w-1/2 flex justify-center perspective-1000">
                  <motion.div 
                    whileHover={{ scale: 1.02, rotateY: 5, rotateX: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative w-full max-w-lg aspect-[4/5] rounded-[2.5rem] overflow-hidden glass shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-white/5"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-white/10 z-10"></div>
                    <img 
                      src={p.image} 
                      alt={p.name}
                      className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-1000 scale-105"
                    />
                    <div className="absolute bottom-6 left-6 z-20">
                      <span className="inline-block px-4 py-1 rounded-full glass text-xs font-semibold tracking-widest text-turmeric uppercase border border-turmeric/20">
                        {p.price}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-[2px] bg-turmeric"></div>
                      <span className="text-turmeric/80 font-bold font-heading text-2xl">{p.index}</span>
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-heading font-extrabold text-cream mb-8 leading-[1.1]">
                      {p.name.split(' ').map((word, i) => (
                        <span key={i} className="block">{word}</span>
                      ))}
                    </h3>
                    <p className="text-gray-400 text-xl leading-relaxed mb-10 max-w-md font-light italic">
                      " {p.description} "
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Progress Bar at the Bottom */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            style={{ scaleX: scrollYProgress }}
            className="h-full bg-turmeric origin-left"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Products;
