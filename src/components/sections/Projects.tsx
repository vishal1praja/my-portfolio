import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Terminal } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with MERN stack. Features include user authentication, product management, shopping cart, and Stripe integration for payments.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application allowing teams to organize work, assign tasks, and track progress with real-time updates.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
    github: "https://github.com",
    live: "https://example.com",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "AI Image Generator",
    description: "A web interface for generating images using OpenAI's DALL-E API. Includes user galleries, prompt saving, and image downloading capabilities.",
    tech: ["React", "OpenAI API", "Firebase", "Framer Motion"],
    github: "https://github.com",
    live: "https://example.com",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Projects</h2>
            <div className="h-px bg-foreground/20 flex-1 max-w-sm"></div>
          </div>

          <div className="space-y-24">
            {projects.map((project, idx) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative grid md:grid-cols-12 gap-8 items-center ${
                  idx % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`md:col-span-7 relative group ${idx % 2 === 1 ? 'md:order-2 md:col-start-6' : 'md:col-start-1'}`}>
                  <a href={project.live} target="_blank" rel="noreferrer" className="block relative overflow-hidden rounded-xl bg-primary/20 aspect-video">
                    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply hover:bg-transparent transition-all duration-300 z-10"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                    />
                  </a>
                </div>

                {/* Content */}
                <div className={`md:col-span-6 relative z-20 ${
                  idx % 2 === 1 ? 'md:order-1 md:col-start-1 md:text-left' : 'md:col-start-7 md:text-right'
                }`}>
                  <p className="text-accent font-medium mb-2 uppercase tracking-wider text-sm">Featured Project</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 hover:text-primary transition-colors">
                    <a href={project.live} target="_blank" rel="noreferrer">{project.title}</a>
                  </h3>
                  
                  <div className={`bg-background/95 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-foreground/5 mb-6 text-foreground/80 leading-relaxed ${
                    idx % 2 === 1 ? 'mr-0 md:-mr-12' : 'ml-0 md:-ml-12'
                  }`}>
                    <p>{project.description}</p>
                  </div>

                  <ul className={`flex flex-wrap gap-4 text-sm font-medium text-foreground/60 mb-6 ${
                    idx % 2 === 1 ? 'justify-start' : 'justify-start md:justify-end'
                  }`}>
                    {project.tech.map(tech => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>

                  <div className={`flex items-center gap-4 ${
                    idx % 2 === 1 ? 'justify-start' : 'justify-start md:justify-end'
                  }`}>
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-primary hover:-translate-y-1 transition-all">
                      <Terminal size={22} />
                    </a>
                    <a href={project.live} target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-primary hover:-translate-y-1 transition-all">
                      <ExternalLink size={22} />
                    </a>
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

export default Projects;
