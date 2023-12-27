import styled from "styled-components";

export const SButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  max-width: 100px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid #646cff;
  padding: 0.6em 1.2em;
  font-size: 0.8em;
  font-weight: 500;
  font-family: inherit;
  background-color: #323232;
  cursor: pointer;
  transition: border-color 0.25s;

  :hover {
    border-color: #646cff;
  }

  @media (prefers-color-scheme: light) {
    &:hover {
      color: #747bff;
      border-color: #646cff;
    }
    &:disabled {
      color: #747bff;
    }
    background-color: #f9f9f9;
  }
`;
