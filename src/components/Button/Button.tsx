import { ReactNode } from "react";
import * as Styled from "./Button.style";

interface Props {
  className?: string;
  type: "submit" | "button" | "reset";
  color: "teal" | "violet";
  children: ReactNode;
}

const Button = ({ className, type, color, children }: Props) => {
  return (
    <Styled.Button className={className} type={type} color={color}>
      {children}
    </Styled.Button>
  );
};

export default Button;
