export const getPositionStyles = (id) => {
  switch (id) {
    case 1:
      return { top: '-10%', left: '5%', transform: 'rotate(-7.47deg)' };
    case 2:
      return { top: '-12%', right: '10%', transform: 'rotate(17.12deg)' };
    case 3:
      return { top: '13%', right: '-15%', transform: 'rotate(14.559deg)' };
    case 4:
      return { top: '40%', right: '-12%', transform: 'rotate(49.455deg)' };
    case 5:
      return { bottom: '0%', right: '-16%', transform: 'rotate(21.472deg)' };
    case 6:
      return { bottom: '0%', left: '30%', transform: ' rotate(-14.949deg)' };
    case 7:
      return { bottom: '16%', left: '0%', transform: 'rotate(-36.868deg)' };
    case 8:
      return { top: '19%', left: '-20%', transform: 'rotate(-20.302deg)' };
    default:
      return {};
  }
};

export const getEndPositionStyles = (id) => {
  switch (id) {
    case 1:
      return {
        top: 'calc(50% - 300px)',
        left: '20%',
        transform: 'rotate(-7.47deg)',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 1.4 },
      };
    case 2:
      return {
        top: 'calc(50% - 300px)',
        left: '45%',
        transform: 'rotate(17.12deg)',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 1.45 },
      };
    case 3:
      return {
        top: '25%',
        right: '15%',
        transform: 'rotate(14.559deg)',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 1.5 },
      };
    case 4:
      return {
        top: '50%',
        right: '18%',
        transform: 'rotate(49.455deg)',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 1.55 },
      };
    case 5:
      return {
        bottom: '5%',
        right: '30%',
        transform: 'rotate(21.472deg)',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 1.6 },
      };
    case 6:
      return {
        bottom: '5%',
        left: '25%',
        transform: ' rotate(-14.949deg)',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 1.65 },
      };
    case 7:
      return {
        bottom: '20%',
        left: '10%',
        transform: 'rotate(-36.868deg)',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 1.7 },
      };
    case 8:
      return {
        top: '22%',
        left: '3%',
        transform: 'rotate(-20.302deg)',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 1.55 },
      };
    default:
      return {};
  }
};
