import { Link } from 'react-scroll';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary pt-16 pb-6 border-t border-gray-800">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          {/* Column 1: Logo & Description */}
          <div className='flex flex-wrap justify-center'>
            <img src={logo} alt="AnnaSaar Logo" className="h-20 w-auto" />
            <p className="text-gray-400 text-base leading-relaxed max-w-xs">
              Where every product comes with a story, a feeling, and the warmth of home.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-cream mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="home" smooth={true} duration={500} className="text-gray-400 hover:text-turmeric transition-colors text-sm cursor-pointer">Home</Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500} className="text-gray-400 hover:text-turmeric transition-colors text-sm cursor-pointer">About Us</Link>
              </li>
              <li>
                <Link to="products" smooth={true} duration={500} className="text-gray-400 hover:text-turmeric transition-colors text-sm cursor-pointer">Products</Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500} className="text-gray-400 hover:text-turmeric transition-colors text-sm cursor-pointer">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-cream mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><span className="text-turmeric mr-2 font-medium italic">Sangli / Pune</span></li>
              <li><span className="text-cream mr-2">Email:</span> Annsaar2025@gmail.com</li>
            </ul>
          </div>

          {/* Column 4: Social Icons */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-cream mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/annasaar_foods/" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-cream hover:bg-turmeric hover:text-primary transition-all duration-300">
                <FaInstagram size={18} />
              </a>
              <a href="https://www.facebook.com/annasaar_foods/" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-cream hover:bg-turmeric hover:text-primary transition-all duration-300">
                <FaFacebookF size={18} />
              </a>
              <a href="https://wa.me/c/919270984360" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-cream hover:bg-turmeric hover:text-primary transition-all duration-300">
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="text-center pt-6 border-t border-gray-800">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} ANNASAAR Foods. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
