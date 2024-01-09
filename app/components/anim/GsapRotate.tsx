import React, { ChangeEvent, useEffect, useRef } from 'react';
import gsap from 'gsap';

const GsapRotate = ({ children }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  let transformValue: any;
  let soundPlayed = false;

  useEffect(() => {
    const xTo = gsap.quickTo(ref.current, 'x', {
      duration: 1,
      ease: 'elastic.out(1,0.3)',
    });
    const yTo = gsap.quickTo(ref.current, 'y', {
      duration: 1,
      ease: 'elastic.out(1,0.3)',
    });
    const rotateTo = gsap.quickTo(ref.current, 'rotation', {
      duration: 1,
      ease: 'elastic.out(1,0.3)',
    });

    const playSound = () => {
      const audio = new Audio('/aud/hoversound.wav');
      audio.play();
    };

    const mouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      if (!soundPlayed) {
        playSound();
        soundPlayed = true;
      }
      if (ref.current) {
        const { height, width, left, top } =
          ref.current.getBoundingClientRect();

        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x);
        yTo(y);
        rotateTo(0);
        gsap.set(ref.current, { zIndex: 100 });
        transformValue =
          children.props.animate.transform.match(/-?\d+(\.\d+)?/);
      }
    };

    const mouseLeave = () => {
      xTo(0);
      yTo(0);
      if (transformValue) {
        rotateTo(transformValue[0]);
      }
      soundPlayed = false;

      gsap.set(ref.current, { zIndex: 'auto' });
    };
    ref.current?.addEventListener('mousemove', mouseMove);
    ref.current?.addEventListener('mouseleave', mouseLeave);

    return () => {
      ref.current?.removeEventListener('mousemove', mouseMove);
      ref.current?.removeEventListener('mouseleave', mouseLeave);
    };
  }, []);

  return React.cloneElement(children, { ref });
};

export default GsapRotate;
