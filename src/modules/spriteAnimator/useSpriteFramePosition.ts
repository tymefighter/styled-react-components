// Library
import React from 'react';

// Types
import { FrameIndex } from './types';

interface InputType {
  height: number;
  width: number;
  frameIndex: FrameIndex;
};

export const useSpriteFramePosition = ({ 
  height, width, frameIndex 
}: InputType) => ({
  right: `${frameIndex.column * width}px`,
  bottom: `${frameIndex.row * height}px`
});