import styled from 'styled-components';
import React from 'react';

// ============ Imported Comps ============== //
import TopNav from '../comps/TopNav';
import ImgBox from '../comps/ImgBox';
import Header from '../comps/Header';
import SubHead from '../comps/SubHead';
import SearchBar from '../comps/SearchBar';
import Footer from '../comps/Footer';

// ============ CSS ============== //
const Cont = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;  
`
const MidCont = styled.div`
  display:flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  justify-content:center;
  align-items:flex-start;
  margin-bottom: ${props=>props.cmarginB}; 
  padding: 0 68px 0 68px;
  box-sizing: border-box;
`
//the filter bar with 2 icon 
const TopBar = styled.div`
  display:flex;
  flex:1;
  flex-firection:row;
  justify-content:right;
  align-items:right;
`

//building the page, 
export default function UserProfile() {
	return(
		<Cont>
			<TopNav/>
      <MidCont>
          <Header text="Map"
          />
          <SubHead align="left" marginL="100" justifyContent="left"
            text="Which area do you want to search"/>
          <SearchBar/>
          <ImgBox cwidth="50%" cheight="600"/>

      </MidCont>
      <MidCont>
          <Header text="List of Landlord" 
          />
          <SubHead align="left" marginL="100" justifyContent="left"
            text="Who do you want to search"/>
          <SearchBar/>

          
      </MidCont>

    </Cont>   

  )
}

