import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';

import NavText from '../NavText';
import VerLogo from '../VerLogo';
import LoginDrop from '../LoginDrop';


const Cont = styled.div`
  width: 100%;
  height: 202px;
  position: relative;  
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content:center;
  margin:${props => props.cmargin};
  box-sizing: border-box;
`
const Nav = styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
`
const LeftBar =styled.div`
    display:flex;
    flex-direction: row;
    flex: 1;
    align-items:center;
    justify-content:space-between;
`
const RightBar = styled.div`
    display:flex;
    flex: 1;
`
const TopNav =({
  cmargin="36px 68px",

})=>{
  // const router = useRouter();
      return (
    <Cont cmargin={cmargin} >
      <VerLogo marginright= "83"/>
      <Nav>
          <LeftBar>
            <NavText/>
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
