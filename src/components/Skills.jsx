import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, MonitorSmartphone, Server, Database, Wrench, Brain } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { skillCategories } from '../data/portfolio';

const iconMap = {
  Code2, MonitorSmartphone, Server, Database, Wrench, Brain
};

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="The tools, languages, and frameworks I use to bring ideas to life."
        />

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {skillCategories.map((category, catIndex) => {
            const Icon = iconMap[category.icon];
            return (
              <motion.div
                key={category.title}
                className="skill-card"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: catIndex * 0.12,
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {/* Animated gradient border overlay */}
                <div className="skill-card-border" />

                {/* Card content */}
                <div className="skill-card-inner">
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-7">
                    <div
                      className="skill-icon-wrapper"
                      style={{
                        '--icon-color': category.color,
                      }}
                    >
                      {Icon && <Icon size={22} style={{ color: category.color }} />}
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="skill-badge"
                        style={{
                          '--badge-color': category.color,
                        }}
                        initial={{ opacity: 0, scale: 0.7, y: 15 }}
                        animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                        transition={{
                          delay: catIndex * 0.12 + skillIndex * 0.06 + 0.35,
                          duration: 0.4,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
