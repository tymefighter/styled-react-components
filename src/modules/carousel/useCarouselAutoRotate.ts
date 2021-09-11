// Library
import React from 'react';

// Types
import { AutoRotate } from './types';

interface InputType {
  autoRotate?: AutoRotate;
  goLeft: () => void;
  goRight: () => void;
}

export const useCarouselAutoRotate = ({ autoRotate, goLeft, goRight }: InputType) => {

  React.useEffect(() => {
    if(autoRotate === undefined) return;

    let rotateFunc = autoRotate.direction === 'LEFT' ? goLeft : goRight;

    const intervalId = setInterval(rotateFunc, autoRotate.delay);

    return () => clearInterval(intervalId);

  }, [autoRotate, goLeft, goRight]);
};