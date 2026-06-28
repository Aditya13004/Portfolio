import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, BookOpen } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { education } from '../data/portfolio';

const iconMap = { GraduationCap, BookOpen };

const Education = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Education"
          subtitle="My academic journey and the foundations that shaped me."
        />

        <div ref={ref} className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-secondary" />

          {education.map((edu, index) => {
            const Icon = iconMap[edu.icon];
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={edu.id}
                className={`relative flex items-start mb-12 last:mb-0 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center bg-dark-200 border-2 border-primary/30 shadow-glow-primary"
                    whileHover={{ scale: 1.2, rotate: 12 }}
                  >
                    {Icon && <Icon size={20} className="text-primary" />}
                  </motion.div>
                </div>

                {/* Content card */}
                <div className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] ${isLeft ? 'md:pr-4' : 'md:pl-4'}`}>
                  <motion.div
                    className="glass-card gradient-border p-6 group"
                    whileHover={{ y: -4, scale: 1.02 }}
                  >
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 mb-3">
                      {edu.year}
                    </span>
                    <h3 className="text-lg font-heading font-bold text-white mb-1 group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-gray-400 mb-2">{edu.institution}</p>
                    <p className="text-sm font-semibold text-secondary">{edu.score}</p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
