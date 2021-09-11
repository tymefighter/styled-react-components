import React, { useEffect } from 'react';

export const useClientSize = () => {

  const [clientSize, setClientSize] = React.useState(() => ({
    height: document.documentElement.clientHeight,
    width: document.documentElement.clientWidth
  }));

  useEffect(() => {

    const windowResizeEventHandler = () => {
      setClientSize({
        height: document.documentElement.clientHeight,
        width: document.documentElement.clientWidth
      });
    }

    window.addEventListener('resize', windowResizeEventHandler);

    return () => {
      window.removeEventListener('resize', windowResizeEventHandler);
    }
  }, [])

  return clientSize;
};