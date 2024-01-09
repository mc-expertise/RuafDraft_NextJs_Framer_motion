import React from 'react';
import ForwardBTN from '../Svgs/ForwardBTN';
import IconLogo from '../Svgs/IconLogo';
import Image from 'next/image';

const Content = () => {
  return (
    <div className="pl-[100px] pt-[80px] flex-1">
      <div className="xl:text-[65px] lg:text-[55px] text-[45px] font-bold uppercase flex flex-col gap-6 ">
        <h1 className="leading-[70px]">
          Yo, Ready to
          <br /> build
          <br />
          <span className="whitespace-nowrap">your social bio ?</span>
        </h1>
        <div>
          <p className="text-[25px] font-semibold leading-[50px] normal-case">
            Social, Games and much more for <br /> Millenails and GenZ
          </p>
          <p className="text-[18px] flex items-center gap-2 font-medium normal-case">
            <span className="font-bold">Ready to start </span>
            the game together ?
          </p>
        </div>
        <div className="flex items-center justify-between px-3  text-[35px] border-[#FF861B] border-[10px] rounded-[20px]">
          <div className="flex items-center gap-3">
            <p className="font-bold xl:text-[25px] text-[18px]">
              CREATE YOUR UNIQUE LINK
            </p>
            <Image
              width={50}
              height={50}
              src={'/imgs/ForwardButton.jpg'}
              alt="forward"
            />
          </div>
          <IconLogo />
        </div>
        <p className="xl:text-[18px] text-[14px] normal-case font-bold text-center">
          Already an account, login
        </p>
      </div>
    </div>
  );
};

export default Content;
