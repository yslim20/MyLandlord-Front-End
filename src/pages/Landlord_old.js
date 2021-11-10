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

//A big wrap for the whole page
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
	justify-content:right;
	align-items:right;
	margin-bottom: 100px;
    width:80%;
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
export default function Landlord() {
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
                
                <MuiTable/>
                
            </MidCont>

         </Cont>   

    )
}
