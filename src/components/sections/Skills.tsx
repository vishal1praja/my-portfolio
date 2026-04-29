import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { category: "Programming", items: ["Java", "C++", "C", "Python"] },
  { category: "Databases", items: ["Basics of DBMS"] },
  { category: "Other Skills", items: ["Video/Image Editing"] },
  { category: "Strengths", items: ["Quick Learner", "Strong Logical Thinking", "Problem Solving", "Self-motivated"] },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16 justify-center">
            <div className="h-px bg-foreground/20 flex-1 max-w-[100px]"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">Technical Arsenal</h2>
            <div className="h-px bg-foreground/20 flex-1 max-w-[100px]"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, idx) => (
              <motion.div 
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-background border border-foreground/10 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-6 text-primary">{skillGroup.category}</h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((item, itemIdx) => (
                    <motion.li 
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (idx * 0.1) + (itemIdx * 0.05) }}
                      className="flex items-center gap-3 text-foreground/80 group"
                    >
                      <span className="w-2 h-2 rounded-full bg-accent/50 group-hover:bg-accent group-hover:scale-150 transition-all duration-300"></span>
                      <span className="group-hover:text-foreground transition-colors font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
