import styled from 'styled-components';
import React from 'react';

// ============ Imported Comps ============== //
import TopNav from '../comps/TopNav';
import UserDrop from '../comps/UserDrop';
import ImgBox from '../comps/ImgBox';
import Header from '../comps/Header';
import SubHead from '../comps/SubHead';
import SearchBar from '../comps/SearchBar';
import Footer from '../comps/Footer';

import ProfileSub from '../comps/ProfileSub';
import ShowAll from '../comps/ShowAll';
import PropertyCard from '../comps/PropertyCard';
import ReviewCard from '../comps/ReviewCard';
import LandlordSub from '../comps/LandlordSub';

// ============ CSS ============== //
const Cont = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;  
`

const UserCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;  
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
const ProfCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-left: 3%;
    margin-bottom: 70px;
`;

const CenterBox = styled.div`
    display:flex;
    margin-top: 50px;
    justify-content: center;
    align-items:center;
`;

const ReviewCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    // margin-left: 3%;
`;

//building the page, 
export default function TenantProfile() {
	return(
		<Cont>
			<TopNav children = {<UserDrop/>} />
{/* =================== Layout */}

      <UserCont>
      <Header marginBottom="45px" marginLeft="4%" text="Nancy J. Rojas"/>
      
        

      </UserCont>
      
      <ProfCont>
        <ProfileSub />
        <ShowAll />
        <CenterBox>
            <PropertyCard marginTop="25%" />
        </CenterBox>
      </ProfCont>
      <ReviewCont>
        <ProfileSub text="Reviews"/>
        <CenterBox>
            <ReviewCard review="The house was newly renovated, and the landlord cared about many things such as electricity and water tanks."/>
        </CenterBox>
        <CenterBox>
            <ReviewCard text="SY" name="Sonia Yepez" />
        </CenterBox>
        <CenterBox>
            <ReviewCard text="CC" name="Corey Conyers" review="The house was quite old, but it was good that the landlord was not too involved in my life." />
        </CenterBox>
      </ReviewCont>
      <Footer />

    </Cont>   

  )
}

