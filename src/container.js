import React from 'react';
import classnames from 'classnames';
import styles from './grid.css';

const Container = ({ fluid, tagName, className, ...props }) => {
  const classname = classnames(
    fluid ? styles.containerfluid : styles.container,
    className
  );

  return React.createElement(tagName || 'div', {
    className: classname,
    ...props
  });
};

export default Container;
