import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';

const Nav = styled.div`
display: flex;
width= ${props=>props.width}px; 
height: ${props=>props.height}px;
border: none;
margin-right: ${props=>props.mright}px;
  align-items:center;
justify-content:center;
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
    height=70,
    marginright = 30,
    text= "Map"
}) => {
    const router = useRouter();

    return (
            <Nav mright={marginright} onClick={()=>router.push(routeTo)}
                height={height}>
                    <Content >{text}</Content>
            </Nav>
    );
}
export default NavText;