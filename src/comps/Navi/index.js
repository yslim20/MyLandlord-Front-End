import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';

// ============ Imported Components ============== //
import VerLogo from '../VerLogo';
import LoginDrop from '../LoginDrop';

// ============ CSS ============== //
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
  margin-bottom: ${props => props.cmarginB}px;
`
const NavCont = styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
`

const Nav = styled.div`    
  height: ${props=>props.height}px;
  margin-right: ${props=>props.mright}px;
  box-sizing: border-box;
  display: flex;
  align-items:center;
  justify-content:center;
  cursor: pointer; 
`;

const Content = styled.p`
  font-family: 'Heebo', sans-serif;
  font-size: ${props=>props.pSize}px;
  height: ${props=>props.pHeight}%;
  font-weight: ${props=>props.pWeight};
  position: relative;

  :before{
    content : "";
    position: absolute;
    background-color: #5333ED;
    height: 2px;
    width : 0;
    bottom: 0px; left: 50%;
    transition: 0.5s; 
    transform: translateX(-50%);
  }
  
  :hover {
    color:#5333ED; 
  }

  :hover:before {    
    width: 100%;
  }

  :active {
    color: #5333ED;
  }

  :active:before {    
    width: 100%;    
  }
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

// ============ Function ============== //
// ============ Layout
const Navi =({

// ============ Props  
  cpadding="",
  cmarginB=50,
  children = <LoginDrop />,

// ============ Navitext Props
  height = 114,
  marginright = "",
  pSize = 24,
  pWeight = 400,
  pHeight = 40,

})=>{
  
  const router = useRouter();

// ============ Layout
  return (
    <Cont cpadding={cpadding} cmarginB={cmarginB} >
      <VerLogo 
        marginright= "83"
        minwidth = "150px"
      />
      
      <NavCont>
        <LeftBar>

          <Nav 
            mright={marginright} 
            onClick={() => router.push("/")}
            height={height}      
          >
            
            <Content               
              pSize={pSize}
              pWeight={pWeight}
              pHeight={pHeight}
            >
              Home
            </Content>
          </Nav>

          <Nav 
            mright={marginright} 
            onClick={() => router.push("/Landlord")}
            height={height}      
          >
            
            <Content 
              pSize={pSize}
              pWeight={pWeight}
              pHeight={pHeight}
            >
              Landlord
            </Content>
          </Nav>

          <Nav 
            mright={marginright} 
            onClick={() => router.push("/Chat")}
            height={height}      
          >
            
            <Content 
              pSize={pSize}
              pWeight={pWeight}
              pHeight={pHeight}
            >
              Chat
            </Content>
          </Nav>

          <Nav 
            mright={marginright} 
            onClick={() => router.push("/ContactUs")}
            height={height}      
          >
            
            <Content 
              pSize={pSize}
              pWeight={pWeight}
              pHeight={pHeight}
            >
              Contact Us
            </Content>
          </Nav>
        </LeftBar>

        <RightBar>
          {children}          
        </RightBar>
      </NavCont>
    </Cont>
  );
}

export default Navi;