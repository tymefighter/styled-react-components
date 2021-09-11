// Library
import React from 'react';

// Types
import { Image, Transition } from './types';

export const useCarouselControls = (images: Image[]) => {

  const [activeId, setActiveId] = React.useState(images[0].id);
  const [transition, setTransition] = React.useState<Transition | undefined>();

  const inTransition = transition !== undefined;

  const jumpToId = React.useCallback((nextId: string) => {
    if(inTransition) return; // Disable Controls during transition

    const activeIndex = images.findIndex(({ id }) => id === activeId);
    const nextIndex = images.findIndex(({ id }) => id === nextId);

    setTransition({
      nextId,
      direction: activeIndex < nextIndex ? 'RIGHT' : 'LEFT'
    });
  }, [activeId, images, setTransition]);

  const goRight = React.useCallback(() => {
    if(inTransition) return; // Disable Controls during transition

    const activeIndex = images.findIndex(({ id }) => id === activeId);
    const nextIndex = (activeIndex < images.length - 1) ? activeIndex + 1 : 0;

    setTransition({ 
      nextId: images[nextIndex].id,
      direction: 'RIGHT'
    });
  }, [activeId, images, setTransition]);

  const goLeft = React.useCallback(() => {
    if(inTransition) return; // Disable Controls during transition

    const activeIndex = images.findIndex(({ id }) => id === activeId);
    const nextIndex = (activeIndex > 0) ? activeIndex - 1 : images.length - 1;
    
    setTransition({ 
      nextId: images[nextIndex].id,
      direction: 'LEFT'
    });
  }, [activeId, images, setTransition]);


  return {
    activeId,
    setActiveId,
    transition,
    setTransition,
    jumpToId,
    goRight,
    goLeft
  };
};