import styled from "styled-components";

export const SLink = styled.a`
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;

  :active {
    text-decoration: none;
  }

  :hover {
    color: #535bf2;
  }

  @media (prefers-color-scheme: light) {
    :hover {
      color: #747bff;
    }
  }
`;
