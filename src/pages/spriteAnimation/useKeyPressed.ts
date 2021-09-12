// Library
import React from 'react';

// Constants
import { DIRECTION_VS_CODE } from './constants';

// Types
import { Direction } from './types';

export const useKeyPressed = () => {

  const [direction, setDirection] = React.useState<Direction>({ 
    up: false, down: false, left: false, right: false  
  }); 

  React.useEffect(() => {
    
    const keyDownHandler = (event: KeyboardEvent) => {
      let partialDirection: Partial<Direction> = {};

      if(event.code === DIRECTION_VS_CODE.UP)
        partialDirection.up = true;

      if(event.code === DIRECTION_VS_CODE.DOWN)
        partialDirection.down = true;

      if(event.code === DIRECTION_VS_CODE.LEFT)
        partialDirection.left = true;

      if(event.code === DIRECTION_VS_CODE.RIGHT)
        partialDirection.right = true;
      
      setDirection(prevDirection => ({
        ...prevDirection,
        ...partialDirection
      }));
    }

    const keyUpHandler = (event: KeyboardEvent) => {
      let partialDirection: Partial<Direction> = {};

      if(event.code === DIRECTION_VS_CODE.UP)
        partialDirection.up = false;

      if(event.code === DIRECTION_VS_CODE.DOWN)
        partialDirection.down = false;

      if(event.code === DIRECTION_VS_CODE.LEFT)
        partialDirection.left = false;

      if(event.code === DIRECTION_VS_CODE.RIGHT)
        partialDirection.right = false;
      
      setDirection(prevDirection => ({
        ...prevDirection,
        ...partialDirection
      }));
    };

    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('keyup', keyUpHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
      document.removeEventListener('keyup', keyUpHandler);
    }

  }, [setDirection]);

  return direction;
};