import styled from 'styled-components';
import React from 'react';

import ProfileSub from '../comps/ProfileSub';
import ShowAll from '../comps/ShowAll';
import PropertyCard from '../comps/PropertyCard';
import ReviewCard from '../comps/ReviewCard';
import SmileRating from '../comps/SmileRating';
import Footer from '../comps/Footer';
import Header from '../comps/Header';
import LandlordSub from '../comps/LandlordSub';
import LandlordAvatar from '../comps/LandlordAvatar';
import LandlordInfo from '../comps/LandlordInfo';
import SubHead from '../comps/SubHead';
import { style } from '@mui/system';


// ============ css ============== //
const Cont = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProfCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-left: 3%;
    margin-bottom: 70px;
`;

const InfoCont = styled.div`
    display: flex;
    justify-content: center;
`;
    
const InfoText = styled.div`
    display: flex;
    flex-direction: column;

`;

const VeriCont = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 140px;
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


// ============ Function ============== //
export default function LandlordProfile() {
    return(
        <Cont>
            <Header marginBottom="45px" marginLeft="4%" text="Jasper White"/>
            <LandlordSub/>
            <InfoCont>
                <LandlordAvatar />
                <InfoText>
                    <SubHead text="Burnaby, BC." fontSize="24" justifyContent="left" marginB="10"/>
                    <LandlordInfo />
                    <VeriCont>
                        <LandlordInfo src="/icons/icon_verification.png" text="Email address"/>
                        <LandlordInfo src="/icons/icon_verification.png" text="Phone number"/>
                        <LandlordInfo src="/icons/icon_verification.png" text="Verify more info"/>
                    </VeriCont> 
                </InfoText>
            </InfoCont>
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