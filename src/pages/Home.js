import styled from 'styled-components';
import React from 'react';

import TopNav from '../comps/TopNav';
import Button from '../comps/Button';
import ImgBox from '../comps/ImgBox';
import NavText from '../comps/NavText';
import SubHead from '../comps/SubHead';

const Cont = styled.div`
    display:flex;
    flex-direction: column;
`;

const Nav = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    height:10%;
`;
const LandBox = styled.div`
    display:flex;
    flex: 1;
    flex-direction: column;
`;

const MidCont = styled.div`
    display:flex;
    flex: 1;
    flex-direction: row;
`
const LeftBar =styled.div`
    display:flex;
    flex: 3;
    flex-direction: row;

`
const RightBar = styled.div`
    display:flex;
    flex: 1;
    margin-right:10%;
    flex-direction: row;
`

const ImgSide = styled.div`
    display:flex;
    flex: 1;
    flex-direction: column;
    margin-left:7%;
`;

const List = styled.div`
    display:flex;
    flex: 1;
    margin-right:10%;
    flex-direction: row;
`;


export default function Home() {
    return(
        <Cont>
            <Nav>
                <LeftBar>
                    <TopNav/>
                    <NavText text="Map" />
                    <NavText text="List"/>
                </LeftBar>
                <RightBar>
                    <Button width="50%"  bg="#FFFFFF" border="solid black"  text="Log In"/>
                    <Button width="50%"  bg="000000" border="solid" text="Sign Up"/>
                </RightBar>
            </Nav>
            <MidCont>
                    <LandBox>
                            <ImgBox src="https://placekitten.com/500/500" width="60%" height="40%"/>
                            <SubHead text="Welcome to MyLandlord, can i sleep?"/>
                            <Button text="Write Review"/>
                    </LandBox>
                    <ImgSide>
                            <ImgBox src="https://placekitten.com/400/400" width="90%" height="90%"/>
                    </ImgSide> 
            </MidCont>
           
        </Cont>
    )
}