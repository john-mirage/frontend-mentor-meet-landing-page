import { ReactNode } from "react";
import * as Styled from "./Button.style";

interface Props {
  className?: string;
  type: "submit" | "button" | "reset";
  size: "md" | "lg";
  color: "teal" | "violet";
  children: ReactNode;
}

const Button = ({ className, type, size, color, children }: Props) => {
  return (
    <Styled.Button className={className} type={type} size={size} color={color}>
      {children}
    </Styled.Button>
  );
};

export default Button;
