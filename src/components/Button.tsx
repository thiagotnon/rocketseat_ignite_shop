import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonContainer } from "../styles/components/Button";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[];
  onClick: () => void;
}
export const Button = ({ children, onClick }: ButtonProps) => {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
};
