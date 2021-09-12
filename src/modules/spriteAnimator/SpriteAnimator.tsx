// Library
import React from 'react';

// Styles
import styles from './SpriteAnimator.module.scss';

// Types
import { FrameIndex } from './types';

// Hooks
import { useSpriteFrameIndex } from './useSpriteFrameIndex';
import { useSpriteFramePosition } from './useSpriteFramePosition';


interface SpriteAnimatorProps {
  height: number;
  width: number;
  imageHeight: number;
  imageWidth: number;
  src: string;
  frameIndices: FrameIndex[];
  delay: number;
  containerClassName?: string;
};

export const SpriteAnimator = ({ 
  height, width, 
  imageHeight, imageWidth, 
  src, frameIndices, delay,
  containerClassName
}: SpriteAnimatorProps) => {

  const frameIndex = useSpriteFrameIndex({ frameIndices, delay });
  const framePosition = useSpriteFramePosition({ height, width, frameIndex });

  return (
    <div
      style={{ height, width }}
      className={styles.container + (containerClassName ? ' ' + containerClassName : '')}
    >
      <img
        src={src} 
        className={styles.image}
        style={{...framePosition, height: imageHeight, width: imageWidth}}
        alt="Animated Sprite Frames"
      />
    </div>
  );
}