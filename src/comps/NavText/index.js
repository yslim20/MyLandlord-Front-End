import styled from 'styled-components';
import React from 'react';

const Nav = styled.div`
display: flex;
position: relative;
:hover {
    ${props=>props.hover}        
  }
`;

const Content = styled.p`
font-family: Saira SemiCondensed, sans-serif;
font-style: normal;
font-weight: normal;
line-height: 28px;
color: 000000;
font-size:38px;
`

const NavText = ({
    color="000000",
    width=50,
    height=20,
    margintop = 5,
    text= "Map",
    bshadow = "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
    hover="blue",
}) => {
    return (
        <NavText> 
            <Nav
                mtop={margintop} onClick={()=>router.push(routeTo)}
                color={color} 
                width={width} 
                height={height}
                hover={hover}
                bshadow={bshadow}>
                <Content text={text}></Content>
                </Nav>
        </NavText>
    );
}
export default NavText;