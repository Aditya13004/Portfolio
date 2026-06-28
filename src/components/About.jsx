import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Cloud, Layers, Code2, GraduationCap, MapPin, Building2, Calendar } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { personalInfo } from '../data/portfolio';

const interests = [
  { icon: Brain, label: 'Artificial Intelligence', color: '#8B5CF6' },
  { icon: Cloud, label: 'Cloud Computing', color: '#06B6D4' },
  { icon: Layers, label: 'Full Stack Development', color: '#2563EB' },
  { icon: Code2, label: 'Scalable Systems', color: '#22C55E' },
];

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me better — my journey, interests, and what drives me."
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left - About Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-card gradient-border p-8 md:p-10">
              {/* Profile Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-heading font-bold text-white shadow-glow-primary shrink-0">
                    AW
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white">{personalInfo.name}</h3>
                    <p className="text-sm text-primary font-medium">{personalInfo.degree}</p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-gray-300 text-xs font-semibold tracking-wide self-start sm:self-center shrink-0 shadow-sm">
                  <Calendar size={13} className="text-gray-400 shrink-0" />
                  <span>2022 — 2026</span>
                </div>
              </div>

              {/* Bio */}
              <p className="text-gray-400 leading-relaxed mb-8">
                {personalInfo.summary}
              </p>

              {/* Info Grid - 3 cards: Education, Location, College */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
                  <GraduationCap size={20} className="text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500">Education</p>
                    <p className="text-sm text-gray-300 font-medium leading-snug">
                      B.E. E&TC
                      <span className="block text-xs text-gray-400 font-normal mt-0.5">2022 — 2026</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
                  <MapPin size={20} className="text-secondary flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="text-sm text-gray-300 font-medium">{personalInfo.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
                  <Building2 size={20} className="text-success flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500">College</p>
                    <p className="text-sm text-gray-300 font-medium">DY Patil COE, Akurdi</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Interests & What I Do */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-heading font-bold text-white mb-2">
              What Drives Me
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I'm a passionate developer who loves transforming complex problems into elegant digital solutions. With a strong foundation in full-stack development and a deep interest in AI, I'm constantly exploring new technologies to build impactful applications.
            </p>

            {/* Interest Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {interests.map((interest, i) => (
                <motion.div
                  key={interest.label}
                  className="glass-card gradient-border p-5 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:rotate-12"
                    style={{ background: `${interest.color}15`, color: interest.color }}
                  >
                    <interest.icon size={22} />
                  </div>
                  <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    {interest.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Fun fact */}
            <motion.div
              className="glass-card p-5 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              <p className="text-sm text-gray-400 italic">
                💡 "I believe in continuous learning and building solutions that make a real-world impact. Every line of code is an opportunity to innovate."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
