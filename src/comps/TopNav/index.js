import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';

import NavText from '../NavText';
import VerLogo from '../VerLogo';
import LoginDrop from '../LoginDrop';


const Cont = styled.div`
  width: 100%;
  height: 150px;
  position: relative;  
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content:center;
  padding:${props => props.cpadding};
  box-sizing: border-box;
  z-index: 999;
  padding: 0 68px 0 68px;
  margin-bottom: ${props => props.cmarginB}px;
`
const Nav = styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
`
const LeftBar =styled.div`
  display:flex;
  flex-direction: row;
  flex: 1.5;
  align-items:center;
  justify-content:space-between;
`
const RightBar = styled.div`
  display:flex;
  flex: 1;
  align-items:center;
  justify-content: flex-end;
`
const TopNav =({
  cpadding="",
  cmarginB=50
})=>{
  // const router = useRouter();
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
