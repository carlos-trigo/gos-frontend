import styled from 'styled-components'
import { fonts, fontSize } from './style'

export const BigTitle = styled.h1`
  font-size: ${fontSize.xl};
  color: rgb(28, 28, 28);
  font-family: 'Barrio', system-ui;
  font-family: 'UnifrakturMaguntia', cursive;
  margin: 50px 10px;
`
export const Text = styled.p<{ size?: string; family?: string }>`
  font-size: ${props => props.size || fontSize.s};
  font-family: ${props => props.family || fonts.karla};
  color: rgb(28, 28, 28);
`
