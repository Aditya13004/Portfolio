import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-dark-300"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Animated logo */}
      <motion.div
        className="relative"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 200 }}
      >
        <motion.div
          className="text-6xl md:text-7xl font-heading font-bold gradient-text-animated loading-logo"
          animate={{
            textShadow: [
              '0 0 20px rgba(37,99,235,0.3)',
              '0 0 40px rgba(139,92,246,0.5)',
              '0 0 20px rgba(6,182,212,0.3)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        >
          AW
        </motion.div>

        {/* Orbital ring */}
        <motion.div
          className="absolute -inset-8 border border-primary/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute -top-1 left-1/2 w-2 h-2 bg-primary rounded-full shadow-glow-primary" />
        </motion.div>

        <motion.div
          className="absolute -inset-14 border border-accent/10 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute top-1/2 -right-1 w-2 h-2 bg-accent rounded-full shadow-glow-accent" />
        </motion.div>
      </motion.div>

      {/* Loading text */}
      <motion.p
        className="mt-12 text-sm text-gray-500 tracking-[0.3em] uppercase font-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Loading Portfolio
      </motion.p>

      {/* Progress bar */}
      <motion.div
        className="mt-6 w-48 h-[2px] bg-white/5 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{
            background: 'linear-gradient(90deg, #2563EB, #8B5CF6, #06B6D4)',
          }}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
