import styled, { css, keyframes } from "styled-components";
import { smallShadow, mediumShadow, colors, breakpoints } from "../../styles";

export const Label = styled.label`
  display: inline-block;
  font-size: 15px;
  color: ${colors.gray};
  text-align: left;
  margin: 8px 0;
  cursor: pointer;
`;

export const Textarea = styled.textarea`
  margin: 0 0 8px 0;
  width: 100%;
  padding: 13px 10px 11px 15px;
  box-sizing: border-box;
  font-size: 14px;
  color: ${colors.black};
  border-radius: 4px;
  border: none;
  box-shadow: inset 0 1px 3px 0 rgba(174, 174, 174, 0.5);
  background: ${colors.white};
  resize: none;

  &::placeholder {
    color: ${colors.gray};
  }
`;

const centerStyle = css`
  margin: 0 auto;
  display: block;
`;

export const Button = styled.button`
  padding: 10px 26px;
  margin-bottom: 8px;
  color: ${colors.white};
  font-size: 16px;
  background: ${colors.primary};
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;
  ${smallShadow}
  ${({ centered }) => centered && centerStyle}

  &:hover {
    ${mediumShadow}
    opacity: 0.5;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 13px;
  top: 8px;
  width: 24px;
  height: 24px;
  opacity: 0.3;
  border: 0;
  cursor: pointer;
  background: transparent;

  &:hover {
    opacity: 1;
  }
  &:before,
  &:after {
    position: absolute;
    top: 0px;
    left: 15px;
    width: 2px;
    height: 26px;
    content: "";
    background-color: ${colors.gray};
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export const Text = styled.p`
  margin: 0 0 8px 0;
  font-size: ${({ small }) => (small ? "12px" : "16px")};
  font-family: "Roboto", sans-serif;
  line-height: 1.43;
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  text-align: ${({ align = "left" }) => align};
  color: ${({ inverted }) => (inverted ? colors.white : colors.black)};
`;

export const ErrorText = styled(Text)`
  color: ${colors.error};
`;

const ripple = keyframes`
  0% {
    top: 20px;
    left: 20px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 40px;
    height: 40px;
    opacity: 0;
  }
`;

export const Loader = styled.div`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;

  &:after,
  &:before {
    content: "";
    position: absolute;
    opacity: 1;
    border: 2px solid ${colors.primary};
    border-radius: 50%;
    animation: ${ripple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  &:before {
    animation-delay: -0.5s;
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

export const StyledContainer = styled.div`
  width: 100%;
  padding-right: 16px;
  padding-left: 16px;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  @media only screen and (min-width: ${breakpoints.sm}) {
    width: 540px;
  }

  @media only screen and (min-width: ${breakpoints.md}) {
    width: 960px;
  }
`;

export const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({ withIndent }) => (withIndent ? "8px 0" : 0)};
`;
