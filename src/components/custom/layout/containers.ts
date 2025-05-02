import styled from "styled-components";

export const FlexCentered = styled.div<{
  direction?: string;
  width?: string;
  height?: string;
  padding?: string;
}>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  padding: ${(props) => props.padding || "auto"};
`;
