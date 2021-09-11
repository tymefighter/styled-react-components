// Library
import React from 'react';

// Types
import { Image, Transition } from './types';

export const useCarouselControls = (images: Image[]) => {

  const [activeId, setActiveId] = React.useState(images[0].id);
  const [transition, setTransition] = React.useState<Transition | undefined>();

  const jumpToId = React.useCallback((nextId: string) => {
    if(transition) return; // Disable Controls during transition

    const activeIndex = images.findIndex(({ id }) => id === activeId);
    const nextIndex = images.findIndex(({ id }) => id === nextId);

    setTransition({
      nextId,
      direction: activeIndex < nextIndex ? 'RIGHT' : 'LEFT'
    });
  }, [transition, activeId, images, setTransition]);

  const goRight = React.useCallback(() => {
    if(transition) return; // Disable Controls during transition

    const activeIndex = images.findIndex(({ id }) => id === activeId);
    const nextIndex = (activeIndex < images.length - 1) ? activeIndex + 1 : 0;

    setTransition({ 
      nextId: images[nextIndex].id,
      direction: 'RIGHT'
    });
  }, [transition, activeId, images, setTransition]);

  const goLeft = React.useCallback(() => {
    if(transition) return; // Disable Controls during transition

    const activeIndex = images.findIndex(({ id }) => id === activeId);
    const nextIndex = (activeIndex > 0) ? activeIndex - 1 : images.length - 1;
    
    setTransition({ 
      nextId: images[nextIndex].id,
      direction: 'LEFT'
    });
  }, [transition, activeId, images, setTransition]);


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