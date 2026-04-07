import { motion } from 'framer-motion';
import aboutus from '../assets/aboutus.png';

const AboutPreview = () => {
  const values = [
    { title: "Purity first", icon: "🌱" },
    { title: "Transparency matters", icon: "🔍" },
    { title: "Traditional wisdom", icon: "🏛️" },
    { title: "Sustainable choices", icon: "🌍" },
    { title: "Honest ingredients only", icon: "✨" }
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-6 lg:px-12 bg-primary relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Brand Story Image/Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square relative rounded-3xl overflow-hidden glass p-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-turmeric/5 mix-blend-overlay" />
              <img 
                src={aboutus} 
                alt="AnnaSaar Story" 
                className="w-4/5 h-4/5 object-contain rounded-2xl shadow-2xl"
              />
              {/* Decorative rings */}
              <div className="absolute inset-0 border-[20px] border-turmeric/10 rounded-3xl pointer-events-none" />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl border border-turmeric/20 shadow-xl">
              <span className="text-4xl font-bold text-turmeric block">12+</span>
              <span className="text-sm font-medium text-cream/70 uppercase tracking-widest">Years of Farming</span>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-turmeric font-semibold tracking-wider uppercase mb-4 block">Our Roots</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-cream mb-8 leading-tight">
              We are not a factory.<br/><span className="italic text-turmeric">We are a family.</span>
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-12">
              <p>
                For 12+ years, we've been farming on our black soil in Sangli—no chemicals, no pressure, just pure intention.
              </p>
              <p>
                AnnaSaar began as a small home experiment... then became a passion... and is now a purpose—to make pure, homegrown food a normal thing again.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {values.map((v, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-center gap-3 glass p-4 rounded-xl border border-white/5"
                >
                  <span className="text-2xl">{v.icon}</span>
                  <span className="text-cream font-medium">{v.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
