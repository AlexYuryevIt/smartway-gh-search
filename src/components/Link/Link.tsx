import { SLink } from "./LinkStyles";

type TLink = {
  link: string;
  children: React.ReactNode;
};

export const Link: React.FC<TLink> = ({ link, children }) => {
  return <SLink href={link}>{children}</SLink>;
};
