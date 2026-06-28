import { useState, useEffect, useCallback } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });
  const blobX = useSpring(0, { stiffness: 80, damping: 25 });
  const blobY = useSpring(0, { stiffness: 80, damping: 25 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = useCallback((e) => {
    setIsVisible(true);
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
    blobX.set(e.clientX);
    blobY.set(e.clientY);
  }, [cursorX, cursorY, blobX, blobY]);

  useEffect(() => {
    if (isMobile) return;

    window.addEventListener('mousemove', handleMouseMove);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('magnetic-btn') ||
        target.dataset.cursor === 'pointer'
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => setIsHovering(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isMobile, handleMouseMove]);

  if (isMobile) return null;

  return (
    <>
      {/* Inner cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 48 : 12,
            height: isHovering ? 48 : 12,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="rounded-full"
          style={{
            background: isHovering
              ? 'rgba(37, 99, 235, 0.15)'
              : 'linear-gradient(135deg, #2563EB, #8B5CF6)',
            border: isHovering ? '2px solid rgba(37, 99, 235, 0.5)' : 'none',
            boxShadow: isHovering
              ? '0 0 30px rgba(37, 99, 235, 0.3)'
              : '0 0 15px rgba(37, 99, 235, 0.5)',
          }}
        />
      </motion.div>

      {/* Outer glow ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 60 : 36,
            height: isHovering ? 60 : 36,
            opacity: isVisible ? 0.4 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="rounded-full border border-primary/30"
          style={{
            boxShadow: '0 0 20px rgba(37, 99, 235, 0.15)',
          }}
        />
      </motion.div>

      {/* Gradient blob following cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[1]"
        style={{
          x: blobX,
          y: blobY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div
          className="w-[300px] h-[300px] rounded-full opacity-[0.07]"
          style={{
            background: 'radial-gradient(circle, rgba(37,99,235,0.8) 0%, rgba(139,92,246,0.4) 40%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
