import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import heroSpices from '../assets/hero image.jpeg';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);
  const rotate = useTransform(scrollY, [0, 500], [0, 5]);

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center bg-primary overflow-hidden pt-32 lg:pt-40">
      
      {/* Background Subtle Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-turmeric/[0.03] to-transparent pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-turmeric/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col space-y-8"
          >
            <div>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "3rem" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-[1px] bg-turmeric mb-6"
              />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-turmeric text-sm font-semibold tracking-[0.3em] uppercase block mb-4"
              >
                Purity from Sangli
              </motion.span>
              
              <h1 className="text-3xl md:text-5xl lg:text-5xl font-heading font-bold text-cream leading-[1.2] tracking-tight mb-8">
                Authentic spices <br />
                with a <span className="italic text-turmeric/90">legacy</span> of soil.
              </h1>
              
              <p className="text-gray-40/80 text-base md:text-lg max-w-md leading-relaxed font-body font-light text-gray-400">
                Honest, farm-to-kitchen flavors. No artificial colors, no preservatives—just the pure essence of our family farm in every pinch.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <motion.div whileHover={{ y: -5 }}>
                <Link 
                  to="products" 
                  smooth={true} 
                  duration={800} 
                  offset={-80}
                  className="bg-turmeric text-primary font-heading font-bold px-8 py-4 rounded-full hover:bg-cream transition-all shadow-lg cursor-pointer block text-sm tracking-widest uppercase"
                >
                  Explore Collection
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ y: -5 }}>
                <Link 
                  to="about" 
                  smooth={true} 
                  duration={800} 
                  offset={-80}
                  className="border border-white/10 text-cream font-heading font-bold px-8 py-4 rounded-full hover:bg-white/5 transition-all cursor-pointer block text-sm tracking-widest uppercase"
                >
                  Our Story
                </Link>
              </motion.div>
            </div>

            {/* Subtle Brand Values */}
            <div className="flex items-center space-x-12 pt-8 border-t border-white/5">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-turmeric/50 mb-1">Source</span>
                <span className="text-xs text-cream/70">Single-Origin Farm</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-turmeric/50 mb-1">Quality</span>
                <span className="text-xs text-cream/70">100% Sun-Dried</span>
              </div>
            </div>
          </motion.div>

          {/* Image Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative perspective-1000"
          >
            <motion.div 
              style={{ y, rotate }}
              className="relative aspect-[4/5] lg:aspect-square w-full max-w-2xl mx-auto rounded-3xl overflow-hidden glass shadow-[0_40px_100px_rgba(0,0,0,0.4)] border border-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-white/5 z-10" />
              <img 
                src={heroSpices} 
                alt="AnnaSaar Spices Collection"
                className="w-full h-full object-cover scale-105"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Hint */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-12 hidden lg:flex flex-col items-center space-y-4"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-cream/30 [writing-mode:vertical-lr] rotate-180">Scroll to discover</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-turmeric/50 to-transparent" />
      </motion.div>

    </section>
  );
};

export default Hero;
