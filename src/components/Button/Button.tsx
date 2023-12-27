import { PropsWithChildren } from "react";
import { SButton } from "./ButtonStyles";

type TCardButton = {
  title: string;
  onClick: () => void;
};

export const Button: React.FC<PropsWithChildren<TCardButton>> = ({
  title,
  children,
  onClick,
}) => {
  return (
    <SButton onClick={onClick}>
      {children}
      {title}
    </SButton>
  );
};
