import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Using placeholder EmailJS configuration
    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      formRef.current, 
      'YOUR_PUBLIC_KEY'
    ).then((result) => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        formRef.current.reset();
        setTimeout(() => setSubmitStatus(null), 5000);
    }, (error) => {
        setIsSubmitting(false);
        setSubmitStatus('error');
    });
  };

  return (
    <div className="w-full relative">
      <AnimatePresence>
        {submitStatus === 'success' && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-8 p-3 bg-turmeric/10 border border-turmeric/20 rounded-lg text-turmeric text-xs text-center font-medium tracking-wide"
          >
            Message sent successfully! We'll get back to you soon.
          </motion.div>
        )}
      </AnimatePresence>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div className="space-y-1 relative group">
            <label className="text-[10px] font-bold text-turmeric/60 uppercase tracking-[0.2em] ml-0.5">Full Name</label>
            <input 
              required
              type="text" 
              name="user_name"
              placeholder="Your Name"
              className="w-full bg-transparent border-b border-white/10 py-2 text-cream focus:outline-none focus:border-turmeric transition-colors placeholder-white/10 text-sm font-light" 
            />
            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-turmeric group-focus-within:w-full transition-all duration-500"></div>
          </div>
          
          <div className="space-y-1 relative group">
            <label className="text-[10px] font-bold text-turmeric/60 uppercase tracking-[0.2em] ml-0.5">Phone Number</label>
            <input 
              required
              type="tel" 
              name="user_phone"
              placeholder="+91"
              className="w-full bg-transparent border-b border-white/10 py-2 text-cream focus:outline-none focus:border-turmeric transition-colors placeholder-white/10 text-sm font-light" 
            />
            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-turmeric group-focus-within:w-full transition-all duration-500"></div>
          </div>
        </div>

        <div className="space-y-1 relative group">
          <label className="text-[10px] font-bold text-turmeric/60 uppercase tracking-[0.2em] ml-0.5">Email Address</label>
          <input 
            required
            type="email" 
            name="user_email"
            placeholder="example@email.com"
            className="w-full bg-transparent border-b border-white/10 py-2 text-cream focus:outline-none focus:border-turmeric transition-colors placeholder-white/10 text-sm font-light" 
          />
          <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-turmeric group-focus-within:w-full transition-all duration-500"></div>
        </div>

        <div className="space-y-1 relative group">
          <label className="text-[10px] font-bold text-turmeric/60 uppercase tracking-[0.2em] ml-0.5">How can we help?</label>
          <textarea 
            required
            name="message"
            rows="4"
            placeholder="Tell us about your requirement..."
            className="w-full bg-transparent border-b border-white/10 py-2 text-cream focus:outline-none focus:border-turmeric transition-colors placeholder-white/10 text-sm font-light resize-none" 
          ></textarea>
          <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-turmeric group-focus-within:w-full transition-all duration-500"></div>
        </div>

        <div className="pt-4">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="group flex items-center space-x-6 text-turmeric font-semibold tracking-[0.2em] uppercase text-xs hover:text-cream transition-all duration-500 disabled:opacity-50"
          >
            <span>{isSubmitting ? 'Processing...' : 'Send Message'}</span>
            <div className="w-10 h-10 rounded-full border border-turmeric/30 flex items-center justify-center group-hover:bg-turmeric group-hover:border-turmeric transition-all duration-500 transform group-hover:translate-x-1">
              <span className="text-turmeric group-hover:text-primary transition-colors duration-500">→</span>
            </div>
          </button>
        </div>

        {submitStatus === 'error' && (
          <p className="text-red-400/80 text-[10px] uppercase tracking-wider text-center mt-4">Unable to send message. Please try again.</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
