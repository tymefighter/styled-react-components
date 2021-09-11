import React, { useEffect } from 'react';

interface Position {
  top: number;
  left: number;
  bottom: number;
  right: number;
}

export const useContainerPosition = () => {
  
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = React.useState<Position | undefined>();

  useEffect(() => {

    if(containerRef.current === null) return;

    const target = containerRef.current;
    const initialTargetRect = target.getBoundingClientRect();
    setPosition({
      top: initialTargetRect.top,
      left: initialTargetRect.left,
      bottom: initialTargetRect.bottom,
      right: initialTargetRect.right
    })

    const windowResizeEventHandler = () => {
      const targetRect = target.getBoundingClientRect();
      
      setPosition({
        top: targetRect.top,
        left: targetRect.left,
        bottom: targetRect.bottom,
        right: targetRect.right
      })
    }

    window.addEventListener('resize', windowResizeEventHandler);

    return () => {
      window.removeEventListener('resize', windowResizeEventHandler);
    }
  }, []);

  return { position, containerRef };
};