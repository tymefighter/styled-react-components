// Constants
import { FRAME_INDICES } from './constants';

// Types
import { Direction } from './types';

export const useFrameIndices = ({ up, down, left, right }: Direction) => {
  if(up) return FRAME_INDICES.UP;
  else if(down) return FRAME_INDICES.DOWN;
  else if(left) return FRAME_INDICES.LEFT;
  else if(right) return FRAME_INDICES.RIGHT;

  return FRAME_INDICES.UP;
}