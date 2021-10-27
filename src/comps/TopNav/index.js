import styled from 'styled-components';
import React from 'react';

const Cont = styled.div`
  width:${props => props.cwidth};
  height: ${props => props.cheight}px;
  position: relative;  
  display: flex;
  align-items: center;
  justify-content: center;
`
const Img = styled.img`
  width:${props => props.width};
  height: ${props => props.height};
  display: block;
  object-fit: ${props => props.objectFit};  
`

export default function TopNav(){
      return (
    <Cont>
        <Img
        src= "https://placekitten.com/100/100"
        onClick={()=>router.push(routeTo)} 
        routeTo = "/LogIn" 
        />
    </Cont>
      );
    }