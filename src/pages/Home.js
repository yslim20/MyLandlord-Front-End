import styled from 'styled-components';
import React from 'react';

import Button from '../comps/Button';
import ImgBox from '../comps/ImgBox';
import SubHead from '../comps/SubHead';
import List from '../comps/List';
import TopNav from '../comps/TopNav';
import Header from '../comps/Header';
import VerLogo from '../comps/VerLogo';
import Mediabox from '../comps/Mediabox'

const Cont = styled.div`
	display:flex;
	flex-direction: column;
	margin: 0;
	padding: 0;
`

const MidCont = styled.div`
	display:flex;
	flex: 1;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content:center;
	align-items:center;
	margin-bottom: 110px;
`
const LeftBox = styled.div`
	display:flex;
	flex: 1;
	flex-direction: column;	
	padding-left: 68px; 
	justify-content:center;
	align-items:center;
	box-sizing: border-box;
`

const RightBox = styled.div`
	display:flex;
	flex: 1.5;
	flex-direction: column;
	justify-content:center;
	align-items:center;
	padding-right: 68px;
	box-sizing: border-box;
`

const ListCont = styled.div`
	display:flex;
	flex: 1;
	flex-direction: row;
	align-items:center;
	justify-content:center;
`

export default function Home() {
	return(
		<Cont>
				<TopNav cmarginB="80"/>

				<MidCont>
					<LeftBox>
						<VerLogo 
							cwidth="278"
							cheight="auto"
							marginright="0"
							marginbttm = "20"
							routeTo=""
							cursor="default"                        
						/>
						<SubHead 
							text="Welcome to MyLandlord!"
							fontSize="24"
							fontWeight="500"
							lineHeight="29"
						/>
						<SubHead 
							text="Review your landlord now!" 	
							lineHeight="39"						
						/>
					</LeftBox>
					<RightBox>
						<Mediabox />
					</RightBox> 
				</MidCont>
		
				<Header 
					marginLeft="0%" 
					justifyContent="center" 
					alignItems="center" 
					text="Find The Best Landlord!" 
					fontSize="34px"
				/>

				<ListCont>
					<List/>
				</ListCont>  
				<Button width="240px" fontSize="24px" text="See More"/>
				
		</Cont>
	)
}