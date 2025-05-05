import styled from "styled-components";
import { fonts, fontSize } from "./style";

export const BigTitle = styled.h1`
  font-size: ${fontSize.xl};
  color: #d7af38;
  font-family: "Barrio", system-ui;
  font-family: "UnifrakturMaguntia", cursive;
  letter-spacing: -0.1em;
  @media only screen and (max-width: 450px) {
    font-size: ${fontSize.l};
  }
`;
export const Text = styled.p<{ size?: string; family?: string }>`
  font-size: ${(props) => props.size || fontSize.s};
  font-family: ${(props) => props.family || fonts.karla};
  color: #d7af38;
`;
