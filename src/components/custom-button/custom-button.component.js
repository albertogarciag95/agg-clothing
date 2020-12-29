import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, secondary, ...otherProps }) => (
  <button className={`${secondary ? 'secondary' : '' } custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;