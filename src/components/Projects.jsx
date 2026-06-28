import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Stethoscope, Leaf, Building2, HeartPulse } from 'lucide-react';
import SectionHeading from './SectionHeading';
import RippleButton from './RippleButton';
import { projects } from '../data/portfolio';

const iconMap = { Stethoscope, Leaf, Building2, HeartPulse };

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouse = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    });
  };

  const Icon = iconMap[project.icon];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="perspective-1000"
      onMouseMove={handleMouse}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setMousePos({ x: 0, y: 0 }); }}
    >
      <motion.div
        className="glass-card gradient-border overflow-hidden group h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(37,99,235,0.2)]"
        animate={{
          rotateX: isHovered ? -mousePos.y * 0.4 : 0,
          rotateY: isHovered ? mousePos.x * 0.4 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Project Screenshot Area */}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block h-60 md:h-[260px] overflow-hidden cursor-pointer group/img shrink-0"
        >
          <img
            src={project.image}
            alt={`${project.title} homepage preview`}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-all duration-500 ease-out group-hover:scale-105 group-hover/img:brightness-110"
            style={{
              transform: isHovered
                ? `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px) scale(1.05)`
                : undefined,
            }}
          />
          {/* Subtle gradient overlay at bottom for smooth transition into card content */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-300 via-transparent to-transparent opacity-60 pointer-events-none" />

          {/* Date badge */}
          <div className="absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full bg-dark-300/80 backdrop-blur-md border border-white/15 text-gray-200 shadow-lg pointer-events-none">
            {project.date}
          </div>
        </a>

        {/* Content */}
        <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
          <div>
            {/* Title */}
            <h3 className="text-xl font-heading font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-sm text-gray-500 mb-3">{project.subtitle}</p>

            {/* Description */}
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.features.slice(0, 5).map((feature) => (
                <span
                  key={feature}
                  className="px-2.5 py-1 text-xs rounded-lg bg-white/[0.04] border border-white/[0.06] text-gray-400"
                >
                  {feature}
                </span>
              ))}
              {project.features.length > 5 && (
                <span className="px-2.5 py-1 text-xs rounded-lg bg-white/[0.04] border border-white/[0.06] text-gray-500">
                  +{project.features.length - 5} more
                </span>
              )}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-auto flex items-center gap-3 pt-2">
            <RippleButton
              href={project.liveUrl}
              variant="primary"
              icon={<ExternalLink size={16} />}
              className="text-xs px-4 py-2.5"
            >
              Live Demo
            </RippleButton>
            <RippleButton
              href={project.githubUrl}
              variant="secondary"
              icon={<Github size={16} />}
              className="text-xs px-4 py-2.5"
            >
              GitHub
            </RippleButton>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="A showcase of my best work — full-stack applications powered by AI and modern technologies."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
