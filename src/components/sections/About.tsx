//import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
            <div className="h-px bg-border flex-1 max-w-sm bg-foreground/20"></div>
          </div>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-3 space-y-6 text-foreground/80 text-lg leading-relaxed">
              <p>
                Hello! My name is Vishal and I am an enthusiastic and motivated Computer Science graduate. 
                I'm currently pursuing my Master of Computer Applications (MCA) at Jabalpur Engineering College, 
                where I am deepening my understanding of software engineering and programming.
              </p>
              <p>
                I am actively seeking an entry-level opportunity in Software Development where I can apply my knowledge 
                of C, C++, Java, and Python. I enjoy tackling challenging problems and constantly learning new things.
              </p>
              <p>
                As a quick learner with strong logical thinking and problem-solving skills, I am self-motivated and 
                ready to gain practical experience while contributing to organizational growth.
              </p>
            </div>
            
            <div className="md:col-span-2 relative group">
              {/* Image Container with Decorative elements */}
              <div className="relative z-10 rounded-lg overflow-hidden border-2 border-foreground/10 group-hover:border-primary/50 transition-colors duration-300">
                <div className="aspect-[4/5] bg-zinc-200 dark:bg-zinc-800 relative group-hover:mix-blend-normal transition-all duration-300 filter grayscale hover:grayscale-0">
                  <img 
                    src="/profile.jpg" 
                    alt="Vishal Prajapati" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4 -z-10 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
