import React from 'react'
import styled from 'styled-components'
import { blueColor, whiteColor, redColor, greyColor } from '../../content/content'

const StyledBtn = styled.button`
  padding: 1rem;
  border: none;
  border-radius: .5rem;
  font-weight: bold;
  box-shadow: 0px 6px 6px 0px rgba(66, 68, 90, 0.55);
  color: ${props => props.bgc === "#F7F7F7" ? "#666874" : "white"};
  background-color: ${props => props.bgc || "hsl(231, 69%, 60%)"};
  width: ${props => props.width || false};
  border: 1px solid transparent;
  cursor: pointer;
  transition: all .2s ease-in-out;

  &:hover,&:focus{
    background-color: #fff;
    color: ${props => props.bgc === "#F7F7F7" ? "#000" : props.bgc};
    border: 1px solid ${props => props.bgc || "hsl(231, 69%, 60%)"};
  }
`

const Button = (props) => {
  return (
    <StyledBtn fontColor={props.fontColor} bgc={props.bgc} width={props.width} onClick={props.onClick}>{props.children}</StyledBtn>
  )
}

export default Button