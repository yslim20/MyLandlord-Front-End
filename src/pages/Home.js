import styled from 'styled-components';
import React from 'react';

import TopNav from '../comps/TopNav';
import Button from '../comps/Button';
import ImgBox from '../comps/ImgBox';
import NavText from '../comps/NavText';

const Cont = styled.div`
    display:flex;
    flex-direction: column;
`;

const Nav = styled.div`
    display:flex;
    flex-direction: space-between;
    height:20%;
`;
const LandBox = styled.div`
    display:flex;
    flex: 1;
    flex-direction: row;
`;

const LeftBar = styled.div`
    display:flex;
    flex: 1;
    flex-direction: row;

`

const ImgSide = styled.div`
    margin-left:7%;
`;

const List = styled.div`
    margin-left:7%;
`;


export default function Home() {
    return(
        <Cont>
            <Nav>
                <TopNav>
                    <NavText text="Map" />
                    <NavText text="List"/>
                </TopNav>
                <LeftBar>
                    <Button bg="#FFFFFF" border="solid black"  text="Log In"/>
                    <Button bg="000000" border="solid" text="Sign Up"/>
                </LeftBar>
            </Nav>
            <LandBox>
                    <Button text="Write Review" margintop="45" />
            </LandBox>
                <ImgSide>
                    <ImgBox src="https://placekitten.com/500/500" width="400px" height="735px"/>
                </ImgSide> 
        </Cont>
    )
}