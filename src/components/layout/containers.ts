import styled from 'styled-components'

export const FlexColCentered = styled.div<{ width?: string; height?: string; padding?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  padding: ${props => props.padding || 'auto'};
`
