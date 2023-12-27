import { observer } from "mobx-react-lite";
import styled from "styled-components";

type TInput = {
  placeholder: string | undefined;
  value: string;
  name: string;
  onInput: (event: React.FormEvent<HTMLInputElement>) => void;
};

export type InputProps = {
  input: TInput;
};

const InputPrimary = styled.input`
  width: 70%;
  border-radius: 8px;
  border: 1px dashed #646cff;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: transparent;

  &:hover {
    border-color: #646cff;
    border-style: solid;
  }

  &:focus,
  &:focus-visible {
    outline: 1px auto -webkit-focus-ring-color;
  }

  &:placeholder {
  }

  @media (prefers-color-scheme: light) {
    &:hover {
      color: #747bff;
    }
    background-color: #f9f9f9;
  }
`;

export const Input: React.FC<InputProps> = observer(({ input }) => {
  return (
    <InputPrimary
      placeholder={input.placeholder}
      onInput={input.onInput}
      value={input.value}
      name={input.name}
    />
  );
});
