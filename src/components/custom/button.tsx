import styled from 'styled-components'
import { color, fontSize } from './style'

export const Button = styled.button`
  color: ${color.dark};
  background-color: ${color.light};
  /* border: 2px solid transparent; */
  border: none;
  border-radius: 3px;
  padding: 10px 30px;
  width: 500px;
  /* font-weight: 300; */
  font-size: ${fontSize.m};
  &:hover {
    background-color: ${color.dark};
    color: ${color.light};
    /* border: 2px solid ${color.dark}; */
  }
  &:active {
    background-color: ${color.darkB};
  }
`
