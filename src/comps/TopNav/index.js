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
    <Cont cpadding={cpadding} cmarginB={cmarginB} >
      <VerLogo 
        marginright= "83"
        minwidth = "150px"
      />
      
      <Nav>
        <LeftBar>
          <NavText
            routeTo = "/"
          />
          <NavText 
            routeTo = "/Landlord"
            text="Landlord"
          />
          <NavText 
            routeTo = "/Chat"
            text="Chat"
          />
          <NavText 
            routeTo = "/ContactUs"
            text="Contact Us"
          />
        </LeftBar>

        <RightBar>
          <LoginDrop />
        </RightBar>
      </Nav>
    </Cont>
  );
}

export default TopNav;