import { useEffect, useState } from 'react';

import {
  Sizes,
  /* , WindowSize */
} from './interface';

// export const useWindowSize = () => {
//   // Initialize state with undefined width/height so server and client renders match
//   // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
//   const [windowSize, setWindowSize] = useState<WindowSize>({
//     width: undefined,
//     height: undefined,
//   });

//   useEffect(() => {
//     // only execute all the code below in client side
//     // Handler to call on window resize
//     function handleResize() {
//       // Set window width/height to state
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     }

//     // Add event listener
//     window.addEventListener('resize', handleResize);

//     // Call handler right away so state gets updated with initial window size
//     handleResize();

//     // Remove event listener on cleanup
//     return () => window.removeEventListener('resize', handleResize);
//   }, []); // Empty array ensures that effect is only run on mount

//   return windowSize;
// };

const sizes: Sizes = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const usePortrait = (size: keyof Sizes = 'md') => {
  const [isPortrait, setIsPortrait] = useState<boolean>(false);

  // use window.innerWidth to get the screen size
  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${sizes[size]})`);
    mediaQuery.addEventListener('change', (e) => {
      setIsPortrait(e.matches);
    });
    setIsPortrait(mediaQuery.matches);
  }, [size]);

  return isPortrait;
};
