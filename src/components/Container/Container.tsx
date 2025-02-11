import React from "react";
import { MainContainer } from "./styles";

export interface ContainerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
}

const Container = ({ children, ...rest }: ContainerProps) => {
  return <MainContainer {...rest}>{children}</MainContainer>;
};

export default Container;
