import { CirclesWithBar } from "react-loader-spinner";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Loader = () => {
  return (
    <LoaderWrapper>
      <CirclesWithBar
        height="100"
        width="100"
        color="#646cff"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel="circles-with-bar-loading"
      />
    </LoaderWrapper>
  );
};
