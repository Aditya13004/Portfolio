import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolio';

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <motion.a
              href="#home"
              className="text-2xl font-heading font-bold gradient-text inline-block mb-2"
              whileHover={{ scale: 1.05 }}
            >
              AW
            </motion.a>
            <p className="text-sm text-gray-500 flex items-center gap-1 justify-center md:justify-start">
              Made with <Heart size={14} className="text-red-500 fill-red-500 inline" /> by {personalInfo.name}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              let Icon;
              if (social.icon === 'github') Icon = Github;
              else if (social.icon === 'linkedin') Icon = Linkedin;
              else if (social.icon === 'mail') Icon = Mail;
              else Icon = () => (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.5 14h-1.75v-3.5h-3.5V16H8.5V8h1.75v3.5h3.5V8H15.5v8z"/>
                </svg>
              );

              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-gray-500 hover:text-primary hover:border-primary/20 transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={16} />
                </motion.a>
              );
            })}
          </div>

          {/* Year */}
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
