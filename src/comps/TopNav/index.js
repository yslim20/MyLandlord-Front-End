import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';
import Button from '../Button';
import NavText from '../NavText';


const Cont = styled.div`
  height: 20%;
  position: relative;  
  display: flex;
  flex-direction: row;
  margin-top:${props => props.margintop}
`
const Nav = styled.div`
  width:100%;
    display:flex;
    flex-direction:row;
`
const LeftBar =styled.div`
    display:flex;
    flex-direction: row;
    flex: 3;
`
const RightBar = styled.div`
    display:flex;
    flex: 1;
    flex-direction: row;

`
const Img = styled.img`
  width:151px;
  height: 84px;
  display: relective;
  object-fit:fill; 
`

const TopNav =({
  margintop=100,
  routeTo="/Home",
})=>{
  const router = useRouter();
      return (
    <Cont mtop={margintop} onClick={()=>router.push(routeTo)}>
        <Img src= "https://placekitten.com/100/100"/>
        <Nav>
           <LeftBar>
                    <NavText text="Home"></NavText>
                    <NavText text="Landlord"></NavText>
                    <NavText text="Chat"></NavText>
                    <NavText text="Contact Us"></NavText>
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
    </Cont>
      );
    }

  export default TopNav;
