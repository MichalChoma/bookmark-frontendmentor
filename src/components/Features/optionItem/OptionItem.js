import React, { useState } from 'react'
import styled from 'styled-components'
const Wrapper = styled.li`
    list-style-type: none;
`
const StyledOption = styled.p`
            @media (max-width:600px) {
                border-top: 1px solid #DFDFE7;
            }
            
            width: 100%;
            padding: 1rem;
            color: ${props => props.isActive === true ? "black" : "var(--grey)"};
            position: relative;
            cursor: pointer;
            transition: opacity .3s ease-in-out;
            transition: color .2s ease-in-out;

            @media (min-width:600px) {
                border-bottom: 1px solid #DFDFE7;
                padding-left: 2rem;
                padding-right: 2rem;
                /* padding: 2rem; */
                /* width: 120%; */
            }

            &:hover{
                color: hsl(0, 94%, 66%);
            }

            &::after{
            position: absolute;
            content: "";
            opacity: 0;
            background-color: var(--red);
            height: 3px;
            width: 50%;
            max-width: 240px;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);

            @media (min-width: 600px) {
                width: 100%;
            }
            }
            
`

const ActiveOption = styled(StyledOption)`
            color: black;
            

            &::after{
            opacity: 1;
        }
`

const OptionItem = (props) => {
  return (
    <Wrapper id={props.id}>
        {
            props.itemState ? (
                <ActiveOption>{props.children}</ActiveOption>
            ) : (
                <StyledOption >{props.children}</StyledOption>
            )
        }   
        
    </Wrapper>
  )
}

export default OptionItem