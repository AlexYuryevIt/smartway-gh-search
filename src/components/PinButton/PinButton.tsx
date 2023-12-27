import React, { PropsWithChildren } from "react";
import { SPinButton } from "./PinButtonStyles";

type TPinButtonProps = {
  onClick: () => void;
};

export const PinButton: React.FC<PropsWithChildren<TPinButtonProps>> = ({
  onClick,
  children,
}) => {
  return <SPinButton onClick={onClick}>{children}</SPinButton>;
};
