import styled, { keyframes } from "styled-components";
import { colors } from "../../styles";

export const StyledFileUpload = styled.div`
  margin: 0 0 16px 0;
  overflow: hidden;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;

const gradientAnimationKeyframes = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

export const StyledDropContainer = styled.div`
  padding: 40px 16px;
  border-radius: 5px;
  margin-bottom: 16px;
  border: 1px solid ${colors.grayLight};
  text-align: center;
  background: ${({ isOver }) => `linear-gradient(-45deg, ${isOver ? `#f36, #ffe9f0` : `#fff7f7, #ffd3d3`})`};
  background-size: 300% 300%;
  animation: ${gradientAnimationKeyframes} 3s ease infinite;
  cursor: pointer;
`;

export const StyledFileInput = styled.input`
  display: none;
`;
