import React from "react";

import { ContainerItens as Container } from "./style";

const ContainerItens = ({ children, isBlur }) => {
  return <Container isBlur={isBlur}>{children}</Container>;
};

export default ContainerItens;
