import styled from 'styled-components';
import React from 'react';

import ProfileSub from '../comps/ProfileSub';
import ShowAll from '../comps/ShowAll';
import PropertyCard from '../comps/PropertyCard';
import ReviewCard from '../comps/ReviewCard';
import Footer from '../comps/Footer';
import Header from '../comps/Header';
import LandlordSub from '../comps/LandlordSub';
import LandlordAvatar from '../comps/LandlordAvatar';
import LandlordInfo from '../comps/LandlordInfo';
import SubHead from '../comps/SubHead';
import ChatIcon from '../comps/ChatIcon';
import RoutButton from '../comps/RoutButton';
import TopNav from '../comps/TopNav'
import router from 'next/router';


// ============ css ============== //
const Cont = styled.div`
    display: flex;
    flex-direction: column;
`;

const HeadCont = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    margin-left: 3%;
`;

const ButtCont = styled.div`
    position: absolute;
    left: 70%;
    top: 35%;
    margin-right: 3%;
    z-index:1;
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
    margin-left: 3%;
`;

const IconCont = styled.a`
    display: block;
    width: 84px;
    height: 84px;
    border-radius: 50%; 
    overflow: hidden;
    bottom: 30px;
    right: 0px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; 

    :hover{
        transform: scale(0.95);
    transition-duration: 0.5s;    
`

const Icon = styled.img`
    display: block;
    object-fit: contain;
    width: 84px;
    height: 84px;
    border-radius: 50%;  
`


// ============ Function ============== //
export default function LandlordProfile() {
    return(
        <Cont>
            <TopNav />
            <HeadCont>
                <Header marginBottom="45px" marginLeft="4%" text="Jasper White"/>
                <IconCont onClick={()=>router.push('/LandlordEdit')}> 
                    <Icon src="/icons/icon_edit.png"/>
                </IconCont>
            </HeadCont>
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