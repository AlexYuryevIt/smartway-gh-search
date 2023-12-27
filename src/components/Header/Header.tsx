import styled from "styled-components";

export type THeader = {
  header: string;
};

const SHeader = styled.h1`
  font-size: 3.2em;
  line-height: 1.1;
  text-align: left;
`;

export const Header: React.FC<THeader> = ({ header }) => {
  return <SHeader>{header}</SHeader>;
};
