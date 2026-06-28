import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from './SectionHeading';
import { githubUsername } from '../data/portfolio';

const GitHubStats = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=transparent&hide_border=true&title_color=2563EB&text_color=94a3b8&icon_color=8B5CF6&bg_color=00000000`;
  const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=transparent&hide_border=true&ring=2563EB&fire=8B5CF6&currStreakLabel=06B6D4&sideLabels=94a3b8&dates=64748b&background=00000000`;
  const languagesUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=transparent&hide_border=true&title_color=2563EB&text_color=94a3b8&bg_color=00000000`;

  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="GitHub Activity"
          subtitle="My open-source contributions and coding activity."
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* GitHub Stats */}
          <motion.div
            className="glass-card gradient-border p-6 flex items-center justify-center"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4, scale: 1.01 }}
          >
            <img
              src={statsUrl}
              alt="GitHub Stats"
              className="w-full max-w-md"
              loading="lazy"
            />
          </motion.div>

          {/* Top Languages */}
          <motion.div
            className="glass-card gradient-border p-6 flex items-center justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -4, scale: 1.01 }}
          >
            <img
              src={languagesUrl}
              alt="Top Languages"
              className="w-full max-w-md"
              loading="lazy"
            />
          </motion.div>

          {/* Streak Stats - Full Width */}
          <motion.div
            className="glass-card gradient-border p-6 md:col-span-2 flex items-center justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4, scale: 1.01 }}
          >
            <img
              src={streakUrl}
              alt="GitHub Streak"
              className="w-full max-w-2xl"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* GitHub Profile Link */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-gray-400 hover:text-primary bg-white/[0.04] border border-white/[0.08] rounded-2xl hover:border-primary/20 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            View Full GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;
