import React from 'react';
import Logo from '../Svgs/Logo';
import GsapRotate from '../anim/GsapRotate';

const Header = () => {
  return (
    <>
      <div>
        <div className="flex items-center z-50 relative">
          <div className="w-fit px-11 relative ">
            <Logo />
          </div>
          <div>
            <ul className="uppercase flex items-center px-11 font-medium gap-4">
              <li className="cursor-pointer">Who we Are</li>
              <li className="cursor-pointer">Use Case</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
