import React from "react";

export interface ContainerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
}

const Container = ({ children, ...rest }: ContainerProps) => {
  return <div {...rest} className="p-10 py-5 mobile:px-2">{children}</div>;
};

export default Container;
