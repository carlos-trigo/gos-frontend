// const MOBILE_BREAKPOINT = 768;
// const MOBILE_DENSITY = 3;

import { useEffect, useState } from "react";

// export function useIsMobile() {
//   const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
//     undefined
//   );

//   React.useEffect(() => {
//     const width = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
//     const density = window.matchMedia(
//       `(-webkit-min-device-pixel-ratio:  ${MOBILE_DENSITY})`
//     );

//     const onChange = () => {
//       setIsMobile(
//         window.innerWidth < MOBILE_BREAKPOINT ||
//           window.devicePixelRatio === MOBILE_DENSITY
//       );
//     };
//     width.addEventListener("change", onChange);
//     density.addEventListener("change", onChange);
//     setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
//     return () => {
//       width.removeEventListener("change", onChange);
//       density.removeEventListener("change", onChange);
//     };
//   }, []);

//   return !!isMobile;
// }

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (navigator.maxTouchPoints > 1) {
      // browser supports multi-touch
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return isMobile;
};
