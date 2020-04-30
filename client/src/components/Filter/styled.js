import styled from "styled-components";
import { breakpoints } from "../../styles";
import { StyledContainer } from "../UI/styled";

export const StyledFilter = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  padding: 8px;

  @media only screen and (min-width: ${breakpoints.sm}) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const StyledInputWrap = styled.div`
  display: flex;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;

  > select {
    width: 100%;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    width: ${({ isFullWidth }) => (isFullWidth ? "100%" : "33%")};
  }
`;
