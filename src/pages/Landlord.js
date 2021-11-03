import styled from 'styled-components';
import React from 'react';

import Button from '../comps/Button';
// import ImgBox from '../comps/ImgBox';
import Header from '../comps/Header';
import SubHead from '../comps/SubHead';
import TopNav from '../comps/TopNav';
import IconButton from '../comps/IconButton';
import List from '../comps/List';

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
const TopBar = styled.div`
    display:flex;
    flex:1;
    flex-firection:row;
    justify-content:left;
	align-items:left;
    `
export default function Landlord() {
	return(
		<Cont>
			<TopNav/>
            <MidCont>
                <Header text="Map"
                />
                <SubHead align="left" marginL="100" justifyContent="left"
                    text="Which area do you want to search"/>
                
            </MidCont>
            <MidCont>
                <Header text="List of Landlord" 
                />
                <SubHead align="left" marginL="100" justifyContent="left"
                    text="Who do you want to search"/>
                <TopBar>
                    <IconButton text="Popularity" />
                    <IconButton text="Filter" src="./icons/filter.png"/>
                </TopBar>
                
                <List/>
                
            </MidCont>

         </Cont>   

    )
}

