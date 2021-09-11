// Library
import React from 'react';

// Styles
import styles from './RotatingCard.module.scss';

interface RotatingCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  containerClassName?: string;
  containerStyle?: React.CSSProperties;
};

export const RotatingCard = (
  { frontContent, backContent, containerClassName, containerStyle }: RotatingCardProps
) => {

  const [hover, setHover] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={styles.container + (containerClassName ? ' ' + containerClassName : '')}
      style={containerStyle}
    >
      <div className={styles.frontCard + (hover ? ' ' + styles.frontCardHover : '')}>
        {frontContent}
      </div>
      <div className={styles.backCard + (hover ? ' ' + styles.backCardHover : '')}>
        {backContent}
      </div>
    </div>
  )
};