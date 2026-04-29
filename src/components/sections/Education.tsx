import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    degree: "Master of Computer Application (MCA)",
    institution: "Jabalpur Engineering College",
    location: "Jabalpur",
    period: "Pursuing",
    description: "Currently pursuing MCA, building advanced skills in software engineering and application development.",
    courses: ["Software Development", "C++", "Java", "Python"]
  },
  {
    degree: "Bachelor of Science (BSc) in Computer Science",
    institution: "Govt. Science College, Jabalpur",
    location: "Jabalpur",
    period: "Completed",
    description: "Graduated with a strong foundation in computer science principles and programming languages.",
    courses: ["Computer Science", "Mathematics", "Physics"]
  },
  {
    degree: "Higher Secondary (12th MP Board)",
    institution: "MP Board",
    location: "Madhya Pradesh",
    period: "Completed",
    description: "Completed higher secondary education with a focus on science and mathematics. Achieved 80%.",
    courses: ["Physics", "Chemistry", "Mathematics"]
  },
  {
    degree: "Secondary (10th MP Board)",
    institution: "MP Board",
    location: "Madhya Pradesh",
    period: "Completed",
    description: "Completed secondary education with strong academic performance. Achieved 89%.",
    courses: ["Science", "Mathematics", "Social Studies"]
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16 justify-center">
            <div className="h-px bg-foreground/20 flex-1 max-w-[100px]"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">Education</h2>
            <div className="h-px bg-foreground/20 flex-1 max-w-[100px]"></div>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/50 before:to-transparent">
            {educationData.map((item, idx) => (
              <motion.div 
                key={item.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                {/* Timeline Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-primary-foreground shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10 transform group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap size={18} />
                </div>
                
                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-background border border-foreground/10 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-2">
                    <h3 className="font-bold text-xl text-foreground">{item.degree}</h3>
                  </div>
                  
                  <div className="text-primary font-medium mb-4">{item.institution}</div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-foreground/60 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{item.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-foreground/80 mb-4 leading-relaxed text-sm md:text-base">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.courses.map((course) => (
                      <span key={course} className="text-xs px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-foreground/70 border border-foreground/5">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
