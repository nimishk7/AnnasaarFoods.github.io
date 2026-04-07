import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 px-6 lg:px-12 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-40 left-10 w-64 h-64 bg-turmeric/5 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-darkgold/10 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
 
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="text-turmeric text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">Let's Connect 🤝</span>
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-heading font-bold text-cream mb-8 leading-tight">
                We’d love to <span className="italic text-turmeric">hear</span> from you!
              </h2>
              <p className="text-gray-300 text-xl max-w-lg leading-relaxed font-light">
                Whether you want to place an order, ask about our products, or simply understand what makes AnnaSaar different—we’re here to help.
              </p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 p-6 glass rounded-2xl border-l-4 border-turmeric inline-block"
              >
                <p className="text-turmeric font-medium text-lg italic">
                  "From our farm to your inbox… let’s start a conversation 💛"
                </p>
              </motion.div>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center flex-shrink-0 text-turmeric border border-white/5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <h4 className="text-lg font-heading font-bold text-cream">Our Farm Roots</h4>
                  <p className="text-gray-400 mt-1">Sangli, Maharashtra, India</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center flex-shrink-0 text-turmeric border border-white/5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 00-2-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <h4 className="text-lg font-heading font-bold text-cream">Email Our Family</h4>
                  <p className="text-gray-400 mt-1">hello@annasaar.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-turmeric/10 blur-3xl rounded-full" />
               <ContactForm />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
