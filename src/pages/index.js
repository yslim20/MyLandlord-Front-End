import styled from 'styled-components';
import React from 'react';

// ============ Imported Comps ============== //
import SubHead from '../comps/SubHead';
import VerLogo from '../comps/VerLogo';
import Mediabox from '../comps/Mediabox'
import HeroImage from '../comps/HeroImage'
import Features from '../comps/Features'
import Footer from '../comps/Footer';
import Navi from '../comps/Navi';

// ============ CSS ============== //
const Cont = styled.div`
	display:flex;
	flex-direction: column;
	margin: 0;
	padding: 0;
	justify-content:center;
	align-items:center;
`

const NavCont = styled.div`
	display:flex;
	width: 100%;
	flex-direction: column;
	padding: 0 4% 0 4%;
	box-sizing: border-box;
` 

const MidCont = styled.div`
	width: 100%;
	display:flex;
	flex-direction: row;
	flex: 1;
	flex-wrap: wrap;
	justify-content: center;
	align-items:center;
	margin-bottom: 100px;
	padding: 0 4% 0 4%;
	box-sizing: border-box;
`
const LeftBox = styled.div`
	display:flex;
	flex-direction: column;	
	justify-content:center;
	align-items:center;
	flex: 1;
`

const RightBox = styled.div`
	display:flex;	
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 1.5;
`

const HeroCont = styled.div`
	width: 100%;
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
	padding: 0 4% 0 4%;
	box-sizing: border-box;
`

const FeatCont = styled.div`
	width: 100%;
	display:flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content:space-around;
	align-items: center;
`

// ============ Function ============== //
// ============ Layout
export default function Home() {
	return(
		<Cont>
{/* // ============ Top Navigation */}
		<NavCont> 
			<Navi />
		</NavCont>			

{/* // ============ Body Starts */}
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
						text="Welcome! We are a landlord review platform"
						fontSize="24"
						fontWeight="500"
						lineHeight="29"
						marginB="25"
					/>
					<SubHead 
						text="You can write a review for your landlord right now" 	
						fontSize="22"
						lineHeight="39"						
					/>
					<SubHead 
						text="Or check out the review of landlords in BC" 	
						fontSize="22"
						lineHeight="39"						
					/>
				</LeftBox>
				<RightBox>
					<Mediabox />
				</RightBox> 
			</MidCont>


{/* // ============ Hero Image */}
			<HeroCont>
				<HeroImage/>
			</HeroCont>  

{/* // ============ Features */}
			<FeatSec>
				<SubHead 
					text = "Discover Features"
					marginB = "20"
					marginL = "2%"
				/>

				<FeatCont>
					<Features />
					<Features 
						src ="./images/img_comm.svg"
						title = "Easy Communication"
						para= "Users can contact any landlords if they are online on the landlord profile section."
					/>
					<Features 
						src ="./images/img_rating.svg"
						title = "Strong Rating System"
						para= "Users can review their landlord by the rating system."
					/>
				</FeatCont>		
			</FeatSec>

{/* // ============ Bottom Navigation */}
			<NavCont> 		
				<Footer />
			</NavCont>	
		</Cont>
	)
}