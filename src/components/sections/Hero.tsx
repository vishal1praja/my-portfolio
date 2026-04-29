import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Terminal, Link, Mail } from 'lucide-react';
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p variants={itemVariants} className="text-primary font-medium mb-4 tracking-wide uppercase">
            Hi, my name is
          </motion.p>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-foreground mb-4 tracking-tight">
            Vishal Prajapati.
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-foreground/60 mb-6 tracking-tight">
            Software Developer.
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl leading-relaxed">
            I'm an enthusiastic Computer Science graduate currently pursuing my MCA. 
            I'm looking to apply my knowledge of C, C++, Java, and Python to build impactful applications 
            and grow as a developer.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-12">
            <a 
              href="#projects"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors transform hover:-translate-y-1 inline-block"
            >
              Check out my work
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 bg-transparent text-foreground border border-foreground/20 rounded-lg font-medium hover:bg-foreground/5 transition-colors inline-block"
            >
              Contact me
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-6">
            <a href="https://www.linkedin.com/in/vishal-prajapati-243195407" target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-primary hover:scale-110 transition-all">
              <FaLinkedin size={26} />
            </a>
            <a href="https://www.instagram.com/_.vishal_official._?igsh=MXV0bmx4aGx3ZWE3ag==" target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-primary hover:scale-110 transition-all">
              <FaInstagram size={26} />
            </a>
            <a href="https://wa.me/qr/PMGABYXH3DYYK1" target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-primary hover:scale-110 transition-all">
              <FaWhatsapp size={26} />
            </a>
            <a href="mailto:risecrazy215@gmail.com" className="text-foreground/60 hover:text-primary hover:scale-110 transition-all">
              <Mail size={26} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce"
      >
        <span className="text-xs text-foreground/50 mb-2 uppercase tracking-widest">Scroll</span>
        <ArrowDown size={20} className="text-foreground/50" />
      </motion.div>
    </section>
  );
};

export default Hero;
