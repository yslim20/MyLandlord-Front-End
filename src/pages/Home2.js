import styled from 'styled-components';
import React from 'react';

import Button from '../comps/Button';
import ImgBox from '../comps/ImgBox';
import NavText from '../comps/NavText';
import SubHead from '../comps/SubHead';
import List from '../comps/List';
import Avatar from '../comps/Avatar';
import TopNav from '../comps/TopNav';

const Cont = styled.div`
    display:flex;
    flex-direction: column;
`

const Nav = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    max-height:20%;
`
const LandBox = styled.div`
    display:flex;
    flex: 1;
    flex-direction: column;
`

const MidCont = styled.div`
    display:flex;
    flex: 1;
    flex-direction: row;
`
const LeftBar =styled.div`
    display:flex;
    flex-direction: row;
    flex: 2;
    justify-content:flex-start;

`
const RightBar = styled.div`
    display:flex;
    flex: 0.5;
    margin-right:0;
    flex-direction: row;
    justify-content:flex-end;
`

const ImgSide = styled.div`
    display:flex;
    flex: 1;
    flex-direction: column;
    margin-left:7%;
`

const ListCont = styled.div`
    display:flex;
    flex: 1;
    margin-right:10%;
    flex-direction: row;
`


export default function Home() {
    return(
        <Cont>
            <Nav>
                
                <LeftBar>
                    <NavText text="Map"></NavText>
                    <NavText text="List"></NavText>
                </LeftBar>
                <RightBar>
                    <Button 
                        radius="5"
                        width="164px"
                        height="48"
                        bgcolor="#FFFFFF" 
                        border="1px solid #000"  
                        text="Log In"
                        routeTo="../LogIn"
                        margintop="30"
                        marginright="20"
                        //text
                        fontSize="24"
                        fontWeight="500"/>
                    <Button 
                        radius="5"
                        width="164px"
                        height="48"
                        bgcolor="#000000" 
                        border="1px solid #000"
                        text="Sign Up"
                        routeTo="../SignUp"
                        margintop="30"
                        marginright="40"
                        //text
                        color="#FFFFFF"
                        fontSize="24"
                        fontWeight="500"/>
                </RightBar>
            </Nav>
            {/* <MidCont>
                    <LandBox>
                            <ImgBox src="https://placekitten.com/500/500" width="60%" height="40%"/>
                            <SubHead text="Welcome to MyLandlord, can i sleep?"/>
                            <Button text="Write Review"/>
                    </LandBox>
                    <ImgSide>
                            <ImgBox src="https://placekitten.com/400/400" width="90%" height="90%"/>
                    </ImgSide> 
            </MidCont>
            <ListCont>
                <List>
                    <Avatar /> 
                    <SubHead></SubHead>
                </List>

            </ListCont> */}
           
        </Cont>
    )
}