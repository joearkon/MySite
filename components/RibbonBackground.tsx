import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

const RibbonBackground: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Use a spring to smooth out the scroll progress for a more "liquid" feel
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Create a parallax effect: move the background image vertically as the user scrolls
  const y = useTransform(smoothScrollProgress, [0, 1], ['0%', '-15%']);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-background">
      {/* Background Image Layer with Parallax */}
      <motion.div 
        className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform"
        style={{ y }}
      >
        <img 
          src="https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAESCyZpwMu4YMia4ZZy6lrlDFBfucFIMQACuR0AAiLeCFaSd78YoFDSsDoE.jpg"
          alt=""
          className="w-full h-full object-cover opacity-40 dark:opacity-30"
          style={{
            filter: 'blur(8px) brightness(0.5)',
          }}
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Atmospheric Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-slate-500/5 blur-[120px] rounded-full animate-pulse will-change-[opacity]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-blue-500/5 blur-[150px] rounded-full will-change-[opacity]" />

      {/* Flowing Ribbons SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-60 dark:opacity-40"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: 'blur(40px)' }} // Use CSS blur instead of SVG feGaussianBlur for better performance
      >
        <defs>
          {/* Gradient 1: Slate to Purple to Gray */}
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.2" />
          </linearGradient>
          
          {/* Gradient 2: Sky to Slate to Purple */}
          <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#64748b" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Ribbon 1 - Flowing Wave */}
        <motion.path
          d="M-100,300 C200,150 400,600 720,400 C1040,200 1240,600 1540,500 L1540,900 L-100,900 Z"
          fill="url(#grad1)"
          animate={{
            d: [
              "M-100,300 C200,150 400,600 720,400 C1040,200 1240,600 1540,500 L1540,900 L-100,900 Z",
              "M-100,400 C300,250 500,500 720,500 C940,500 1140,300 1540,400 L1540,900 L-100,900 Z",
              "M-100,300 C200,150 400,600 720,400 C1040,200 1240,600 1540,500 L1540,900 L-100,900 Z"
            ]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Ribbon 2 - Counter Wave */}
        <motion.path
          d="M-100,700 C300,600 500,900 800,700 C1100,500 1300,800 1600,700 L1600,900 L-100,900 Z"
          fill="url(#grad2)"
          animate={{
            d: [
              "M-100,700 C300,600 500,900 800,700 C1100,500 1300,800 1600,700 L1600,900 L-100,900 Z",
              "M-100,600 C200,700 400,800 720,800 C1040,800 1240,700 1540,600 L1540,900 L-100,900 Z",
              "M-100,700 C300,600 500,900 800,700 C1100,500 1300,800 1600,700 L1600,900 L-100,900 Z"
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default RibbonBackground;
