'use client';
import Header from './components/Header/page';
import Content from './components/Content/page';
import RightContent from './components/RightContent/page';
import HowWorks from './components/HowWorks/page';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Loader from './components/Loader/page';
export default function Home() {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
      document.body.style.cursor = 'default';
    }, 2000);
  }, []);

  return (
    <main className="h-full">
      <AnimatePresence mode="wait">{isLoading && <Loader />}</AnimatePresence>
      {!isLoading && (
        <>
          <Header />
          <div className="flex items-center flex-col-reverse lg:flex-row heightContent">
            <Content />
            <div className="noenee w-full h-full relative flex-1 heightContent">
              <AnimatePresence mode="wait">
                <RightContent />
              </AnimatePresence>
            </div>
          </div>
          <HowWorks />
        </>
      )}
    </main>
  );
}
