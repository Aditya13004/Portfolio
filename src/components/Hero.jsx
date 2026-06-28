import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, Download, ArrowRight, MessageCircle, FileText } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { personalInfo, socialLinks, stats } from '../data/portfolio';
import AnimatedCounter from './AnimatedCounter';
import RippleButton from './RippleButton';

const HackerRankIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.5 14h-1.75v-3.5h-3.5V16H8.5V8h1.75v3.5h3.5V8H15.5v8z"/>
  </svg>
);

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  hackerrank: HackerRankIcon,
};

const Hero = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div
          className="absolute top-20 left-10 w-72 h-72 rounded-full animate-float opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(37,99,235,0.4) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full animate-float-slow opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block px-4 py-2 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants}>
              <h2 className="text-lg md:text-xl text-gray-400 font-heading mb-2">
                Hi, I'm
              </h2>
              <h1 className="text-[2.5rem] sm:text-5xl lg:text-[2.35rem] xl:text-[2.65rem] 2xl:text-[3rem] font-bold font-heading leading-tight mb-4">
                <span className="gradient-text-animated">
                  {personalInfo.name}
                </span>
              </h1>
            </motion.div>

            {/* Typing Animation */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="flex items-center justify-center lg:justify-start gap-3 text-xl md:text-2xl font-heading">
                <span className="text-gray-500">{'<'}</span>
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer', 2000,
                    'AI Enthusiast', 2000,
                    'Software Engineer', 2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-secondary font-semibold"
                />
                <span className="text-gray-500">{'/>'}</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              {personalInfo.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <RippleButton
                href={personalInfo.resumeUrl}
                variant="primary"
                icon={<FileText size={18} />}
              >
                View Resume
              </RippleButton>
              <RippleButton
                href="#projects"
                variant="secondary"
                icon={<ArrowRight size={18} />}
              >
                View Projects
              </RippleButton>
              <RippleButton
                href="#contact"
                variant="outline"
                icon={<MessageCircle size={18} />}
              >
                Contact Me
              </RippleButton>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              {socialLinks.map((social, i) => {
                const Icon = socialIcons[social.icon];
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:border-primary/30 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    title={social.name}
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors duration-300" />
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/5 shadow-glow-primary" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Side - Developer Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
            className="relative flex items-center justify-center"
          >
            {/* Animated code block illustration */}
            <div className="relative w-full max-w-md">
              {/* Outer glow */}
              <div
                className="absolute inset-0 rounded-4xl animate-glow"
                style={{
                  background: 'linear-gradient(135deg, rgba(37,99,235,0.1), rgba(139,92,246,0.1), rgba(6,182,212,0.1))',
                  filter: 'blur(30px)',
                }}
              />

              {/* Main card */}
              <motion.div
                className="relative glass-card p-6 md:p-8"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                {/* Terminal header */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 text-xs text-gray-500 font-mono">portfolio.jsx</span>
                </div>

                {/* Code lines */}
                <div className="font-mono text-sm space-y-2">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 }}
                  >
                    <span className="text-accent">const</span>{' '}
                    <span className="text-secondary">developer</span>{' '}
                    <span className="text-gray-500">=</span>{' '}
                    <span className="text-gray-500">{'{'}</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 }}
                    className="pl-4"
                  >
                    <span className="text-primary">name</span>
                    <span className="text-gray-500">:</span>{' '}
                    <span className="text-success">"Aditya"</span>
                    <span className="text-gray-500">,</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 }}
                    className="pl-4"
                  >
                    <span className="text-primary">role</span>
                    <span className="text-gray-500">:</span>{' '}
                    <span className="text-success">"Full Stack Dev"</span>
                    <span className="text-gray-500">,</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.6 }}
                    className="pl-4"
                  >
                    <span className="text-primary">passion</span>
                    <span className="text-gray-500">:</span>{' '}
                    <span className="text-success">"AI & Innovation"</span>
                    <span className="text-gray-500">,</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.8 }}
                    className="pl-4"
                  >
                    <span className="text-primary">coffee</span>
                    <span className="text-gray-500">:</span>{' '}
                    <span className="text-accent">Infinity</span>
                    <span className="text-gray-500">,</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.0 }}
                  >
                    <span className="text-gray-500">{'}'}</span>
                    <span className="text-gray-500">;</span>
                  </motion.div>
                </div>

                {/* Floating tech icons */}
                <div className="absolute -top-4 -right-4 p-3 glass-card rounded-2xl animate-float">
                  <span className="text-2xl">⚛️</span>
                </div>
                <div className="absolute -bottom-4 -left-4 p-3 glass-card rounded-2xl animate-float-slow">
                  <span className="text-2xl">🚀</span>
                </div>
                <div className="absolute top-1/2 -right-6 p-2 glass-card rounded-xl animate-float-fast">
                  <span className="text-lg">🤖</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="glass-card p-6 text-center group"
              whileHover={{ y: -6, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + i * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold font-heading gradient-text mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
