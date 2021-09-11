// Library
import React from 'react';

// Hooks
import { useContainerPosition } from './useContainerPosition';

export enum PopoverLocation {
  TOP_LEFT, TOP_RIGHT,
  BOTTOM_LEFT, BOTTOM_RIGHT
};

interface PopoverProps {
  popoverLocation: PopoverLocation;
  children: (input: { 
    openPopover: () => void, 
    closePopover: () => void,
    isPopoverOpen: boolean 
  }) => React.ReactNode;
  content: (input: { closePopover: () => void }) => React.ReactNode;
};

export const Popover = ({ popoverLocation, children, content }: PopoverProps) => {
  
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
  const { position, containerRef } = useContainerPosition();
  const openPopover = React.useCallback(() => setIsPopoverOpen(true), [setIsPopoverOpen]);
  const closePopover = React.useCallback(() => setIsPopoverOpen(false), [setIsPopoverOpen]);

  let popoverElement: React.ReactElement | undefined;

  if(isPopoverOpen && position) {
    let popoverPosition;

    switch(popoverLocation) {
      case PopoverLocation.TOP_LEFT:
        popoverPosition = {
          bottom: `calc(100vh - ${position.top}px)`,
          right: `calc(100vw - ${position.left}px)`
        }
        break;

      case PopoverLocation.TOP_RIGHT:
        popoverPosition = {
          bottom: `calc(100vh - ${position.top}px)`,
          left: position.right
        }
        break;

      case PopoverLocation.BOTTOM_LEFT:
        popoverPosition = {
          top: position.bottom,
          right: `calc(100vw - ${position.left}px)`
        }
        break;
      
      case PopoverLocation.BOTTOM_RIGHT:
        popoverPosition = {
          top: position.bottom,
          left: position.right
        }
        break;
    }

    popoverElement = (
      <div style={{ position: 'fixed', ...popoverPosition}}>
        {content({ closePopover })}
      </div>
    );
  }

  return (
    <div>
      <div ref={containerRef}>
        {children({ openPopover, closePopover, isPopoverOpen })}
      </div>
      {popoverElement}
    </div>
  );
}