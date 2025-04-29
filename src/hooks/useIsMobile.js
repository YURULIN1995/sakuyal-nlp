// 檔案位置: src/hooks/useIsMobile.js

import { useState, useEffect } from 'react';

/** JSDoc
 * Custom Hook to detect if the current window width is mobile size.
 * @param {number} breakpoint - The maximum width (inclusive) to consider as mobile. Defaults to 768.
 * @returns {boolean} - True if the window width is less than or equal to the breakpoint, false otherwise.
 */
const useIsMobile = (breakpoint = 768) => {
  // Initialize state based on current window size (or false if window is undefined)
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= breakpoint;
    }
    return false;
  });

  useEffect(() => {
    // Handler function to check window size
    const checkIsMobile = () => {
      // Ensure window exists before accessing innerWidth
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= breakpoint);
      }
    };

    // --- Debounce resize handler ---
    let timeoutId = null;
    const handleResize = () => {
      // Clear previous timeout if it exists
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      // Set a new timeout to run checkIsMobile after a short delay
      // This prevents excessive calls during rapid resizing
      timeoutId = setTimeout(checkIsMobile, 150); // 150ms debounce delay
    };
    // -----------------------------

    // Add event listener only if window exists
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    // Cleanup function to remove event listener and clear timeout
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
      // Clear timeout if component unmounts before timeout fires
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [breakpoint]); // Re-run effect if the breakpoint changes

  return isMobile;
};

export default useIsMobile;