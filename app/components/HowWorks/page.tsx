import React from 'react';
import ForwardBTN from '../Svgs/ForwardBTN';
import Image from 'next/image';
import { slideX } from './anim';
import { motion } from 'framer-motion';

const HowWorks = () => {
  return (
    <motion.div
      variants={slideX}
      initial="initial"
      animate="exit"
      className="flex gap-3 items-center justify-end pb-8">
      <p className="font-bold">3409 Active users</p>
      <div className="flex items-center gap-2">
        <Image width={55} height={55} src="/imgs/Ellipse.jpg" alt="no" />
        <Image width={55} height={55} src="/imgs/Ellipse.jpg" alt="no" />
        <Image width={55} height={55} src="/imgs/Ellipse.jpg" alt="no" />
      </div>
      <button
        className="flex items-center border-[#FF861B] border-[5px] rounded-[20px] max-h-[100px] px-8 py-4 gap-2 font-bold"
        style={{
          background:
            'linear-gradient(180deg, rgba(255, 134, 27, 0.20) 0%, rgba(255, 57, 94, 0.20) 100%)',
        }}>
        <Image
          width={50}
          height={50}
          src={'/imgs/CircledPlay.jpeg'}
          alt="forward"
        />
        HOW IT WORKS
      </button>
    </motion.div>
  );
};

export default HowWorks;
