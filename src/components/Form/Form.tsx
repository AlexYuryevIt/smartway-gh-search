import { observer } from "mobx-react-lite";
import styled from "styled-components";

type FormProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
};

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid #747bff;
  padding: 0.6em 1.2em;
  margin-bottom: 20px;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;

  @media (prefers-color-scheme: light) {
    &:hover {
      color: #747bff;
    }
    background-color: #f9f9f9;
  }
  @media (max-width: 576px) {
    width: 350px;
  }
`;

export const Form: React.FC<FormProps> = observer(({ onSubmit, children }) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
});
