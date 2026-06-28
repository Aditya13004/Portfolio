import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Linkedin, Download, ArrowRight, FileText } from 'lucide-react';
import SectionHeading from './SectionHeading';
import RippleButton from './RippleButton';
import { personalInfo, socialLinks } from '../data/portfolio';

const HackerRankIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className || 'w-5 h-5'}>
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.5 14h-1.75v-3.5h-3.5V16H8.5V8h1.75v3.5h3.5V8H15.5v8z"/>
  </svg>
);

const contactCards = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: '#2563EB',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    color: '#06B6D4',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: personalInfo.location,
    href: `https://maps.google.com/?q=${encodeURIComponent(personalInfo.location)}`,
    color: '#22C55E',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Aditya13004',
    href: socialLinks.find(s => s.icon === 'github')?.url || '#',
    color: '#8B5CF6',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'aditya-wakalkar',
    href: socialLinks.find(s => s.icon === 'linkedin')?.url || '#',
    color: '#3B82F6',
  },
  {
    icon: HackerRankIcon,
    label: 'HackerRank',
    value: 'wakalkaraditya',
    href: socialLinks.find(s => s.icon === 'hackerrank')?.url || '#',
    color: '#22C55E',
  },
];

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? Let's connect!"
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Left - Contact Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.a
                    key={card.label}
                    href={card.href}
                    target={card.label !== 'Phone' && card.label !== 'Email' ? '_blank' : undefined}
                    rel={card.label !== 'Phone' && card.label !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="glass-card gradient-border p-5 group block"
                    initial={{ opacity: 0, y: 25 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                    whileHover={{ y: -6, scale: 1.03 }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-3.5 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110"
                      style={{
                        background: `${card.color}12`,
                        boxShadow: `0 0 20px ${card.color}08`,
                      }}
                    >
                      <Icon
                        size={20}
                        style={{ color: card.color }}
                        className="w-5 h-5"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mb-0.5">{card.label}</p>
                    <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 break-all">
                      {card.value}
                    </p>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right - Let's Connect Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="glass-card gradient-border p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
                Let's Connect
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Interested in collaborating, discussing opportunities, or building innovative software solutions? Feel free to connect with me through any of the platforms below.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <RippleButton
                  href={`mailto:${personalInfo.email}`}
                  variant="primary"
                  icon={<Mail size={18} />}
                >
                  Email Me
                </RippleButton>
                <RippleButton
                  href={personalInfo.resumeUrl}
                  variant="secondary"
                  icon={<FileText size={18} />}
                >
                  View Resume
                </RippleButton>
              </div>

              {/* Decorative quote */}
              <motion.div
                className="mt-8 pt-6 border-t border-white/[0.06]"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
              >
                <p className="text-sm text-gray-500 italic">
                  "Open to full-time opportunities, freelance projects, and exciting collaborations."
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
