// Library
import React from 'react';

// Styles
import styles from './Loader.module.scss';

type LoaderProps = React.HTMLProps<HTMLDivElement>;

export const Loader = ({ className, ...props }: LoaderProps) => (
  <div {...props} className={styles.loader + (className ? ' ' + className : '')} />
);