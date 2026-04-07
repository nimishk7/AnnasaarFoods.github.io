import { motion } from 'framer-motion';
import { FaPhoneAlt, FaMapMarkerAlt, FaRegClock, FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const ContactBar = () => {
  return (
    <div className="relative -mt-10 md:-mt-14 z-20 px-4 flex justify-center w-full pb-12">
      <div className="max-w-[1100px] w-full glass rounded-3xl md:rounded-[2.5rem] flex flex-col md:flex-row overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10">
        
        {/* Left Side (Informational) */}
        <div className="w-full md:w-[65%] grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/5 p-4 md:p-6">
          
          <div className="flex flex-col items-center sm:items-start p-3 hover:-translate-y-1 transition-transform duration-300">
            <div className="text-turmeric mb-2 opacity-80">
              <FaPhoneAlt size={18} />
            </div>
            <h4 className="text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-1">Talk to us</h4>
            <p className="text-cream text-sm font-medium tracking-wide">+91 9270984360</p>
          </div>

          <div className="flex flex-col items-center sm:items-start p-3 hover:-translate-y-1 transition-transform duration-300">
            <div className="text-turmeric mb-2 opacity-80">
              <FaMapMarkerAlt size={18} />
            </div>
            <h4 className="text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-1">Our Farm</h4>
            <p className="text-cream text-sm font-medium tracking-wide italic">Sangli, MH</p>
          </div>

          <div className="flex flex-col items-center sm:items-start p-3 hover:-translate-y-1 transition-transform duration-300">
            <div className="text-turmeric mb-2 opacity-80">
              <FaRegClock size={18} />
            </div>
            <h4 className="text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-1">Timing</h4>
            <p className="text-cream text-sm font-medium tracking-wide">10 AM - 8 PM</p>
          </div>

        </div>

        {/* Right Side (CTA) */}
        <div className="w-full md:w-[35%] bg-turmeric/80 backdrop-blur-xl p-4 md:p-6 flex flex-col justify-center items-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-darkgold opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          
          <h3 className="text-primary font-heading font-bold text-base mb-3 relative z-10 tracking-tight">Connect With Us</h3>
          
          <div className="flex space-x-4 relative z-10">
            {[ 
              { icon: <FaInstagram size={18} />, href: "https://www.instagram.com/annasaar_foods/" },
              { icon: <FaFacebookF size={18} />, href: "https://www.facebook.com/annasaar_foods/" },
              { icon: <FaWhatsapp size={20} />, href: "https://wa.me/c/919270984360" }
            ].map((social, i) => (
              <motion.a 
                key={i}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href={social.href} 
                className="w-10 h-10 bg-primary text-turmeric rounded-xl flex items-center justify-center hover:bg-black transition-colors shadow-lg"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactBar;
