import styled from "styled-components";
import { colors } from "../../styles";

export const StyledInput = styled.input`
  background: ${colors.white};
  box-shadow: inset 0 1px 3px 0 rgba(174, 174, 174, 0.5);
  border-radius: 4px;
  border: none;
  padding: 10px 16px 10px;
  font-size: 16px;
  color: ${colors.black};
  box-sizing: border-box;
  width: 100%;
  margin: 0;

  &::placeholder {
    color: ${colors.gray};
  }
`;
