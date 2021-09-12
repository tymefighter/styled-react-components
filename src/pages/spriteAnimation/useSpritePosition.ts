// Library
import React, { useEffect } from 'react';

// Types
import { Direction } from './types';

interface Position {
  top: number;
  left: number;
};

interface InputType {
  initialPosition: Position;
  direction: Direction;
};

const POSITION_UNIT = 20;

export const useSpritePosition = ({ initialPosition, direction }: InputType) => {

  const [position, setPosition] = React.useState<Position>(initialPosition);

  useEffect(() => {
    let newPosition: Partial<Position> = {};
  
    if(direction.up)
      newPosition.top = position.top - POSITION_UNIT;

    if(direction.down)
      newPosition.top = position.top + POSITION_UNIT;

    if(direction.left)
      newPosition.left = position.left - POSITION_UNIT;

    if(direction.right)
      newPosition.left = position.left + POSITION_UNIT;

    setPosition({...position, ...newPosition});
  }, [direction]);

  return position;
};