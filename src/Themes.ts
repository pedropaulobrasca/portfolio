import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  text: '#363537',
  background: `url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='30' height='30' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 100%, 1)'/><path d='M0 22.5h30v15H0zm15-15h30v15H15m-30-15h30v15h-30zm15-15h30v15H0z'  stroke-width='0.5' stroke='hsla(259, 0%, 90%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")`
}

export const darkTheme = {
  text: '#FAFAFA',
  background: `url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='30' height='30' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 21%, 1)'/><path d='M0 22.5h30v15H0zm15-15h30v15H15m-30-15h30v15h-30zm15-15h30v15H0z'  stroke-width='1' stroke='hsla(259, 0%, 13%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")`
}

export const GlobalStyles = createGlobalStyle<any>`
  body {
    background: ${({ theme }: any) => theme.background};
    color: ${({ theme }: any) => theme.text};
    transition: all 0.50s linear;
  }

  a {
    text-decoration: none;
    color: ${({ theme }: any) => theme.text};
  }
`;

