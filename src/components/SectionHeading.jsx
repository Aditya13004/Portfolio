import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionHeading = ({ title, subtitle, className = '' }) => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div ref={ref} className={`text-center mb-16 md:mb-20 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-heading gradient-text mb-4">{title}</h2>
        {subtitle && <p className="section-subheading">{subtitle}</p>}
        <motion.div
          className="mx-auto mt-6 h-1 rounded-full"
          style={{
            background: 'linear-gradient(90deg, transparent, #2563EB, #8B5CF6, #06B6D4, transparent)',
          }}
          initial={{ width: 0 }}
          animate={inView ? { width: 120 } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.div>
    </div>
  );
};

export default SectionHeading;
