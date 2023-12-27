import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 440px;

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const RepositoriesWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  min-width: 100%;
  margin: 0 auto;

  @media (max-width: 576px) {
    flex-direction: column-reverse;
    gap: 30px;
  }
`;
