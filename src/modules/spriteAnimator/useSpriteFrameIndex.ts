// Library
import React, { useEffect } from 'react';

// Types
import { FrameIndex } from './types';

interface InputType {
  frameIndices: FrameIndex[];
  delay: number;
};

export const useSpriteFrameIndex = ({ frameIndices, delay }: InputType) => {

  const [frameIndex, setFrameIndex] = React.useState<FrameIndex>(frameIndices[0]);

  React.useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {

      console.log(index, frameIndices.length)
      setFrameIndex(frameIndices[index]);

      index = index === frameIndices.length - 1 ? 0 : index + 1;

    }, delay);

    return () => {
      clearInterval(intervalId);
    }

  }, [frameIndices, delay, setFrameIndex]);

  return frameIndex;
};