import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const RippleButton = ({ children, variant = 'primary', href, icon, className = '', download, onClick, type }) => {
  const [ripples, setRipples] = useState([]);
  const buttonRef = useRef(null);

  const handleClick = (e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples(prev => [...prev, { x, y, id }]);
    setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 600);

    if (href && href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }

    onClick?.(e);
  };

  const variants = {
    primary: 'bg-gradient-to-r from-primary to-primary-600 text-white shadow-glow-primary hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]',
    secondary: 'bg-white/[0.06] text-white border border-white/[0.1] hover:bg-white/[0.1] hover:border-primary/30',
    outline: 'bg-transparent text-primary border border-primary/30 hover:bg-primary/10',
    accent: 'bg-gradient-to-r from-accent to-accent-600 text-white shadow-glow-accent',
  };

  const Tag = href && !href.startsWith('#') ? 'a' : href ? 'a' : 'button';
  const extraProps = {};
  if (Tag === 'a') {
    extraProps.href = href;
    if (!href.startsWith('#')) {
      extraProps.target = '_blank';
      extraProps.rel = 'noopener noreferrer';
    }
    if (download) extraProps.download = true;
  }
  if (type) extraProps.type = type;

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Tag
        ref={buttonRef}
        onClick={handleClick}
        className={`relative overflow-hidden inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${variants[variant]} ${className}`}
        {...extraProps}
      >
        {icon && <span className="relative z-10">{icon}</span>}
        <span className="relative z-10">{children}</span>

        {/* Ripples */}
        {ripples.map(ripple => (
          <span
            key={ripple.id}
            className="ripple"
            style={{
              left: ripple.x - 10,
              top: ripple.y - 10,
              width: 20,
              height: 20,
            }}
          />
        ))}
      </Tag>
    </motion.div>
  );
};

export default RippleButton;
