import styled from 'styled-components';
import React from 'react';

import Button from '../comps/Button';
// import ImgBox from '../comps/ImgBox';
import SubHead from '../comps/SubHead';
import TopNav from '../comps/TopNav';
import VerLogo from '../comps/VerLogo';
import Mediabox from '../comps/Mediabox'
import HeroImage from '../comps/HeroImage'

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
	margin-bottom: 100px;
	padding: 0 68px 0 68px;
`
const LeftBox = styled.div`
	display:flex;
	flex: 1;
	flex-direction: column;	
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
	box-sizing: border-box;
`

const HeroCont = styled.div`
	display:flex;
	flex: 1;
	flex-direction: column;
	align-items:flex-start;
	justify-content:center;
	margin-bottom: 100px;
`

const FeatSec = styled.div`
	display:flex;
	flex-direction: column;
	justify-content:center;
	align-items:flex-start;
	box-sizing: border-box;
	margin-bottom: 100px;
	padding: 0 68px 0 68px;
`

const FeatCont = styled.div`
	display:flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content:space-between;
	align-items: center;
`

export default function Home() {
	return(
		<Cont>
			<TopNav/>

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

			<HeroCont>
				<HeroImage/>
			</HeroCont>  

			<FeatSec>
				<SubHead 
					text = "Discover Features"
				/>
			</FeatSec>
				
				
		</Cont>
	)
}