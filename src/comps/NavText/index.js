import styled from 'styled-components';
import React from 'react';
import { useRouter } from 'next/router'

const Nav = styled.div`    
  height: ${props=>props.height}px;
  margin-right: ${props=>props.mright}px;
  box-sizing: border-box;
  display: flex;
  align-items:center;
  justify-content:center;
  cursor: pointer; 
`;

const Content = styled.p`
font-family: Saira SemiCondensed, sans-serif;
font-style: normal;
font-weight: normal;
color: #000000;
font-size:26px;
text=${props=>props.text};
:hover {
    color:#FF008A;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;       
  }
`

const NavText = ({

    height = 114,
    marginright = "",
    text= "Home",
    className = "bttntxt",
    routeTo = "/Home",
    pSize = 24,
    pWeight = 400,
    pHeight = 40,

}) => {
  const router = useRouter()

  return (
    <Nav 
      mright={marginright} 
      onClick={() => router.push(routeTo)}
      height={height}      
    >
      
      <Content 
        className={className}
        pSize={pSize}
        pWeight={pWeight}
        pHeight={pHeight}
      >
        {text}
      </Content>
    </Nav>
  );
}
export default NavText;