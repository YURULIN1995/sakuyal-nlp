import { useState, useEffect } from 'react';

/** JSDoc start 偵測目前視窗寬度是否為行動裝置尺寸的自訂 Hook。
@param {number} breakpoint - 被視為行動裝置的最大寬度 (包含此值)。預設為 768px。
@returns {boolean} - 如果視窗寬度小於或等於 breakpoint 回傳 true，大於 breakpoint 回傳 false。
 JSDoc end*/

const useIsMobile = (breakpoint = 921) => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= breakpoint;
    }
    return false;
  });

  useEffect(() => {
    const checkIsMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= breakpoint);
      }
    };

    // Debounce resize
    let timeoutId = null;
    const handleResize = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(checkIsMobile, 150);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [breakpoint]); // 如果 breakpoint 改變，則重新執行 effect

  return isMobile;
};

export default useIsMobile;