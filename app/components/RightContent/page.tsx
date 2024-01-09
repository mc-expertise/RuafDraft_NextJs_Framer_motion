import React from 'react';
import { cardsContent } from '../Constant/Cards';
import Heart from '../Svgs/Heart';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getPositionStyles, getEndPositionStyles } from './anim.js';
import GsapRotate from '../anim/GsapRotate';

const RightContent = () => {
  return (
    <>
      <div className="">
        {cardsContent.map((card, index) => (
          <GsapRotate key={index}>
            <motion.div
              initial={getPositionStyles(card.id)}
              animate={getEndPositionStyles(card.id)}
              exit={getPositionStyles(card.id)}
              style={{
                background: card.background,
                color: card.colorText,
                zIndex: card.Zindex,
                height: card.Height,
              }}
              className="p-6 rounded-[10px] absolute w-[226px] flex flex-col gap-2 cursor-pointer ShadowBackgroundCards">
              {card.image && (
                <Image
                  width={30}
                  height={30}
                  src={`/${card.image}`}
                  alt="whynot"
                />
              )}
              <div className={`${card.paragraph ? 'flex flex-col gap-2' : ''}`}>
                <h1 className="text-[25px] font-bold">{card.title}</h1>
                <span className="text-[16px] font-normal">
                  {card.tag ? card.tag : card.paragraph}
                </span>
              </div>
              {card.id !== 8 ? (
                <button
                  style={{
                    color: card.ColorTextBtn,
                    borderColor: card.colorBorder,
                  }}
                  className={`flex items-center border-[5px] rounded-3xl text-black w-[127px] h-[50px] text-[16px] justify-center gap-2 ${
                    card.id === 7 ? 'bg-black' : 'bg-white'
                  }`}>
                  <Heart bgHeart={card.colorHeart} />
                  {card.contentBtn}
                </button>
              ) : (
                ''
              )}
            </motion.div>
          </GsapRotate>
        ))}

        <div className="rounded-[10px] absolute border-[10px] border-[#EDF9FB] z-[7] top-[50%] left-[45%] translate-x-[-50%] translate-y-[-50%]">
          <Image
            width={255}
            height={255}
            src="/imgs/new_image.png"
            alt="whynot"
          />
        </div>
      </div>
    </>
  );
};

export default RightContent;
