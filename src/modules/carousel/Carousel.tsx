// Library
import React from 'react';

// Styles
import styles from './Carousel.module.scss';

// Hooks
import { useCarouselControls } from './useCarouselControls';

// Types
import { Theme, AutoRotate, Image } from './types';

interface CarouselControlsProps {
  images: Image[];
  activeId: string;
  controls: {
    jumpToId: (nextId: string) => void;
    goLeft: () => void;
    goRight: () => void;
  };
  arrowControls: boolean;
  jumpControls: boolean;
};

const CarouselControls = ({ 
  images, activeId, controls, arrowControls, jumpControls 
}: CarouselControlsProps) => (
  <div className={styles.carouselControls}>
    {(arrowControls && (
      <div className={styles.arrowControls}>
        <button 
          className={styles.leftButton} 
          onClick={controls.goLeft}
        >
          &#8592;
        </button>
        <button 
          className={styles.rightButton} 
          onClick={controls.goRight}
        >
          &#8594;
        </button>
      </div>
    ))}
    {(jumpControls && (
      <div className={styles.jumpControls}>
        {images.map(({ id, label }) => (
          <input 
            checked={activeId === id}
            onClick={() => controls.jumpToId(id)}
            key={id}
            type="radio"
            name="carousel-jump-controls"
            aria-label={label} 
          />
        ))}
      </div>
    ))}
  </div>
)

interface CarouselProps {
  images: Image[];
  theme?: Theme;
  arrowControls?: boolean;
  jumpControls?: boolean;
  autoRotate?: AutoRotate;
  containerClassName?: string;
  containerStyle?: React.CSSProperties;
}

export const Carousel = ({ 
  images, theme = 'LIGHT', 
  arrowControls = true, jumpControls = true,
  autoRotate = 'NONE', 
  containerClassName, containerStyle
}: CarouselProps) => {

  const {
    activeId,
    setActiveId,
    transition,
    setTransition,
    jumpToId,
    goRight,
    goLeft
  } = useCarouselControls(images);

  if(images.length === 0) return null;

  const activeImage = images.find(({ id }) => id === activeId) as Image;
  let carouselContent;

  if(transition === undefined)
    carouselContent = <img src={activeImage.src} alt={activeImage.label} />;

  else {
    const nextImage = images.find(({ id }) => id === transition.nextId) as Image;

    let directionClassName, leftImg, rightImg;

    if(transition.direction === 'LEFT') {
      directionClassName = 'transitionLeft';
      leftImg = nextImage;
      rightImg = activeImage;
    }

    else {
      directionClassName = 'transitionRight';
      leftImg = activeImage;
      rightImg = nextImage;
    }

    const onAnimationEndHandler = () => {
      setActiveId(transition.nextId);
      setTransition(undefined);
    }

    carouselContent = (
      <>
        <img 
          onAnimationEnd={onAnimationEndHandler}
          className={styles[directionClassName]} src={leftImg.src} alt={leftImg.label} />
        <img className={styles[directionClassName]} src={rightImg.src} alt={rightImg.label} />
      </>
    );
  }

  carouselContent = (
    <div className={styles.carouselContent}>
      {carouselContent}
    </div>
  );

  return (
    <div 
      className={styles.carouselContainer + (containerClassName ? ' ' + containerClassName : '')}
      style={containerStyle}  
    >
      {carouselContent}
      <CarouselControls 
        images={images}
        activeId={activeId}
        controls={{ jumpToId, goLeft, goRight }}
        arrowControls={arrowControls}
        jumpControls={jumpControls}
      />
    </div>
  );
};