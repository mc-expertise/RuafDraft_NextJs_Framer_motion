import React, { useEffect, useState } from 'react';
import IconLogo from '../Svgs/IconLogo';
import { slideUp, opacity } from './anim';
import { motion } from 'framer-motion';
const Loader = () => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };
  return (
    <>
      <motion.div
        variants={slideUp}
        initial="initial"
        exit="exit"
        className="bg-[#000] fixed w-screen h-screen z-[100] flex items-center justify-center">
        {dimension.width > 0 && (
          <>
            <motion.div
              variants={opacity}
              initial="initial"
              animate="enter"
              className="relative z-[110]">
              <IconLogo />
            </motion.div>
            <svg className="svgCl">
              <motion.path
                className="pathCl"
                variants={curve}
                initial="initial"
                exit="exit"></motion.path>
            </svg>
          </>
        )}
      </motion.div>
    </>
  );
};

export default Loader;
