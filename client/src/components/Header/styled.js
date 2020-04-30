import styled from "styled-components";
import { colors } from "../../styles";
import { StyledContainer } from "../UI/styled";

export const StyledHeader = styled.div`
  margin: 0 auto;
  background: ${colors.primary};
`;
export const StyledHeaderWrap = styled(StyledContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

export const StyledLogo = styled.div`
  font-size: 24px;
  color: ${colors.white};
`;
