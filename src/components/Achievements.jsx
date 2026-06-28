import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from './SectionHeading';
import { achievements } from '../data/portfolio';

const Achievements = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="achievements" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Achievements"
          subtitle="Milestones and recognition that fuel my passion."
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className="glass-card gradient-border p-8 text-center group"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5, type: 'spring' }}
              whileHover={{ y: -10, scale: 1.03 }}
            >
              {/* Emoji */}
              <motion.div
                className="text-5xl mb-4 inline-block"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {achievement.emoji}
              </motion.div>

              {/* Glow circle behind */}
              <div
                className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle, ${achievement.color}, transparent)`,
                  filter: 'blur(20px)',
                }}
              />

              {/* Title */}
              <h3 className="text-lg font-heading font-bold text-white mb-1 group-hover:text-primary transition-colors">
                {achievement.title}
              </h3>
              <p className="text-sm font-medium mb-2" style={{ color: achievement.color }}>
                {achievement.subtitle}
              </p>
              <p className="text-sm text-gray-500">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
