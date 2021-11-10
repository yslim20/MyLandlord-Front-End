import styled from 'styled-components';
import React from 'react';

import Button from '../comps/Button';
// import ImgBox from '../comps/ImgBox';
import Header from '../comps/Header';
import SubHead from '../comps/SubHead';
import TopNav from '../comps/TopNav';
import IconButton from '../comps/IconButton';
import List from '../comps/List';
import SearchBar from '../comps/SearchBar';
import ImgBox from '../comps/ImgBox';
import MuiTable from '../comps/MuiTable'
import PaginationRow from '../comps/PaginationRow'

// ============ CSS ============== //
const Cont = styled.div`
	display:flex;
	flex-direction: column;
	margin: 0;
	padding: 0;
`
const MidCont = styled.div`
	display:flex;
	flex: 1;
	flex-direction: column;
	justify-content:center;
	align-items:flex-start;
	margin-bottom: 100px;
  padding: 0 68px 0 68px;
`
//the filter bar with 2 icon 
const TopBar = styled.div`
  display:flex;
  flex:1;
  flex-direction:row;
  justify-content:center;
	align-items:flex-start;
`

// ============ Function ============== //
// ============ Layout
export default function Landlord() {
	return(
		<Cont>
{/* // ============ Top Navigation */}
			<TopNav/>

{/* // ============ MAP */}
      <MidCont>
        <Header text="Map" marginLeft="0"/>
        <SubHead 
          marginB = "40"
          justifyContent="left"
          text="Which area do you want to search?"
        />
        <SearchBar/>

{/* it is a image with img tag */}
        <ImgBox 
          cwidth="100%" 
          cheight="auto"
          src="./images/img_map.png"
        />
      </MidCont>

{/* // ============ LIST OF LANDLORD */} 
      <MidCont>
        <Header text="List of Landlord" marginLeft="0"/>
        <SubHead 
          marginB = "40"
          justifyContent="left"            
          text="Who do you want to search?"
        />
        <SearchBar
          placeholder="Please type your landlord name or address.."
        />

        <MuiTable/>
        <PaginationRow />
          
      </MidCont>
    </Cont> 
  )
}

