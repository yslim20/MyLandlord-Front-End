import styled from 'styled-components';
import React from 'react';

const Text = styled.h2`
display: flex;
position: relative;
font-family: Saira SemiCondensed, sans-serif;
font-style: normal;
font-weight: normal;
line-height: 28px;
color: 000000;

:hover {
    ${props=>props.hover}        
  }
`;

const NavText = ({
    color="000000",
    text="Map",
    width=50,
    height=20,
    margintop = 100,
    hover = "color: blue",
    bshadow = "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"

}) => {
    return (
        <NavText mtop={margintop} onClick={()=>router.push(routeTo)}
                color={color} 
                text={text}
                width={width} 
                height={height}
                hover={hover}
                bshadow={bshadow}
            >
        </NavText>
    );
}
export default NavText;