import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState('');
  const [cursorType, setCursorType] = useState<'default' | 'hover' | 'play' | 'view' | 'drag'>('default');
  const [isVisible, setIsVisible] = useState(false);

  // Motion values for coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring configuration for smooth lag effect
  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only run on desktop screens
    if (window.innerWidth < 1024) return;

    setIsVisible(true);
    document.body.classList.add('custom-cursor-active');

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest('[data-cursor]');
      
      if (interactiveEl) {
        const type = interactiveEl.getAttribute('data-cursor') || 'hover';
        setCursorType(type as any);
        
        const text = interactiveEl.getAttribute('data-cursor-text') || '';
        setCursorText(text);
      } else {
        setCursorType('default');
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  // Define size and animation states based on cursorType
  const variants = {
    default: {
      width: 12,
      height: 12,
      backgroundColor: '#111111',
      border: '0px solid transparent',
      borderRadius: '50%',
      x: '-50%',
      y: '-50%',
    },
    hover: {
      width: 80,
      height: 80,
      backgroundColor: 'rgba(220, 232, 245, 0.3)', // Cinematic soft accent
      border: '1px solid rgba(17, 17, 17, 0.1)',
      borderRadius: '50%',
      x: '-50%',
      y: '-50%',
    },
    play: {
      width: 90,
      height: 90,
      backgroundColor: '#111111',
      border: '0px solid transparent',
      color: '#FFFFFF',
      borderRadius: '50%',
      x: '-50%',
      y: '-50%',
    },
    view: {
      width: 100,
      height: 100,
      backgroundColor: '#ECEAE6', // Card background color
      border: '1px solid #C7C4BE',
      color: '#111111',
      borderRadius: '50%',
      x: '-50%',
      y: '-50%',
    },
    drag: {
      width: 80,
      height: 80,
      backgroundColor: '#111111',
      border: '0px solid transparent',
      color: '#FFFFFF',
      borderRadius: '50%',
      x: '-50%',
      y: '-50%',
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[10000] flex items-center justify-center text-center font-general text-[10px] font-medium uppercase tracking-widest mix-blend-difference overflow-hidden"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: '-50%',
        translateY: '-50%',
        willChange: 'transform',
      }}
      variants={variants}
      animate={cursorType}
      transition={{ type: 'spring', damping: 28, stiffness: 220 }}
    >
      {cursorText && (
        <motion.span
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          className={cursorType === 'view' ? 'text-text-primary' : 'text-white'}
        >
          {cursorText}
        </motion.span>
      )}
    </motion.div>
  );
}
