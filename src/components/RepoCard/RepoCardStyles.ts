import styled from "styled-components";

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0.6em 1.2em;
  max-height: 250px;
  width: 400px;
  border: 1px solid #747bff;
  border-radius: 8px;

  @media (prefers-color-scheme: light) {
    background-color: #f9f9f9;
  }
  @media (max-width: 576px) {
    width: 375px;
  }
`;

export const CardInnerWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
  align-items: center;
  text-align: left;
`;

export const CardStatsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const PinButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const CardButtonsWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export const CardTitle = styled.h2`
  margin: 0;
  padding: 0;
  max-width: 300px;
  font-size: 1em;
  font-weight: 700;
  text-align: left;
  word-break: break-all;
`;

export const CardDescription = styled.p`
  font-size: 0.8em;
  text-align: left;
`;

export const CardStars = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1em;
  text-align: left;
`;

export const CardForks = styled.p`
  margin: 0;
  padding: 0;
  width: 85px;
  font-size: 0.9em;

  @media (max-width: 576px) {
    font-size: 0.6em;
  }
`;

export const CardAvatar = styled.img`
  border-radius: 50%;
  max-width: 30px;
  max-height: 30px;
`;
