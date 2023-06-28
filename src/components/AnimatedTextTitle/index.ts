import { keyframes, styled } from "styled-components";

export const hue = keyframes`
  from {
    -webkit-filter: hue-rotate(0deg);
  }
  to {
    -webkit-filter: hue-rotate(-360deg);
  }
`;

export const AnimatedGradientTitle = styled.h1`
  color: #4328e9;
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  font-family: Saira Stencil One;
  font-feature-settings: "kern";
  font-weight: 700;
  overflow-wrap: break-word;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
  font-variant: small-caps;
  letter-spacing: 4.5px;
`;

export const AnimatedGradientTextBase = styled.span`
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
`;
