import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import SectionHeading from './SectionHeading';
import RippleButton from './RippleButton';
import { certifications } from '../data/portfolio';

const Certifications = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="certifications" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Certifications"
          subtitle="Professional certifications that validate my expertise."
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="glass-card gradient-border p-7 group"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Award Icon */}
              <motion.div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{
                  background: `${cert.color}15`,
                  border: `1px solid ${cert.color}30`,
                }}
                whileHover={{ rotate: 12, scale: 1.1 }}
              >
                <Award size={28} style={{ color: cert.color }} />
              </motion.div>

              {/* Content */}
              <h3 className="text-lg font-heading font-bold text-white mb-1 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm font-medium mb-3" style={{ color: cert.color }}>
                {cert.provider}
              </p>

              {/* Date */}
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-5">
                <Calendar size={14} />
                <span>{cert.date}</span>
              </div>

              {/* View Certificate Button */}
              <RippleButton
                href={cert.url}
                variant="secondary"
                icon={<ExternalLink size={14} />}
                className="text-xs px-4 py-2"
              >
                View Certificate
              </RippleButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
