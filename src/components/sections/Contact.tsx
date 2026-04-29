//import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-foreground/70 max-w-lg mx-auto">
              Although I'm not currently looking for any new opportunities, my inbox is always open. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 group hover:bg-primary hover:text-white transition-colors duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Email</h3>
                  <a href="mailto:risecrazy215@gmail.com" className="text-foreground/70 hover:text-primary transition-colors">risecrazy215@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 group hover:bg-primary hover:text-white transition-colors duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Location</h3>
                  <p className="text-foreground/70">48, Ambedkar colony, Adhartal, Jabalpur</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 group hover:bg-primary hover:text-white transition-colors duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Phone</h3>
                  <a href="tel:+918251024330" className="text-foreground/70 hover:text-primary transition-colors">+91 8251024330</a>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-4 border-t border-foreground/10">
                <h3 className="text-lg font-bold text-foreground mb-4">Social Media</h3>
                <div className="flex items-center gap-4">
                  <a href="https://www.linkedin.com/in/vishal-prajapati-243195407" target="_blank" rel="noreferrer" className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-sm">
                    <FaLinkedin size={22} />
                  </a>
                  <a href="https://www.instagram.com/_.vishal_official._?igsh=MXV0bmx4aGx3ZWE3ag==" target="_blank" rel="noreferrer" className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-sm">
                    <FaInstagram size={22} />
                  </a>
                  <a href="https://wa.me/qr/PMGABYXH3DYYK1" target="_blank" rel="noreferrer" className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-sm">
                    <FaWhatsapp size={22} />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.form 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              onSubmit={handleSubmit}
              className="bg-background border border-foreground/10 rounded-2xl p-8 shadow-lg"
            >
              <div className="mb-6 relative group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-foreground/20 py-3 px-1 text-foreground focus:outline-none focus:border-primary transition-colors peer"
                  placeholder=" "
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-1 top-3 text-foreground/50 transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-4 peer-valid:text-xs pointer-events-none"
                >
                  Your Name
                </label>
              </div>
              
              <div className="mb-6 relative group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-foreground/20 py-3 px-1 text-foreground focus:outline-none focus:border-primary transition-colors peer"
                  placeholder=" "
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-1 top-3 text-foreground/50 transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-4 peer-valid:text-xs pointer-events-none"
                >
                  Your Email
                </label>
              </div>
              
              <div className="mb-8 relative group">
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-foreground/20 py-3 px-1 text-foreground focus:outline-none focus:border-primary transition-colors peer resize-none"
                  placeholder=" "
                />
                <label 
                  htmlFor="message" 
                  className="absolute left-1 top-3 text-foreground/50 transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-4 peer-valid:text-xs pointer-events-none"
                >
                  Your Message
                </label>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-primary text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-all transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none dark:focus:ring-offset-zinc-900"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
