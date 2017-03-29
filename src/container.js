import React from 'react';
import classnames from 'classnames';

const Container = ({ fluid, tagName, className, ...props }) => {
  const classname = classnames(
    fluid ? 'container-fluid' : 'container',
    className
  );

  return React.createElement(tagName || 'div', {
    className: classname,
    ...props
  });
};

export default Container;
