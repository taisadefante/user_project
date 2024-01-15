import React from "react";

import { Button as ContainerButton } from "./style";
const Button = ({ children, ...props }) => {
  return <ContainerButton {...props}>{children}</ContainerButton>;
};

export default Button;
