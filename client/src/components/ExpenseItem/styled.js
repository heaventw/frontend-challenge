import styled from "styled-components";
import { colors, smallShadow, mediumShadow } from "../../styles";

export const StyledItem = styled.div`
  padding: 16px 16px 8px 16px;
  margin-bottom: 16px;
  transition: box-shadow 0.2s ease-in-out;
  border-radius: 5px;
  ${smallShadow}

  &:hover {
    background: ${colors.grayLight};
    ${mediumShadow}
  }
`;
