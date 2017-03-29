import React from 'react';
import classnames from 'classnames';
import styles from './grid.css';

const Row = ({ tagName, className, ...props }) => {
  const classname = classnames(
    styles.row,
    className
  );

  return React.createElement(tagName || 'div', {
    className: classname,
    ...props
  });
};

export default Row;
