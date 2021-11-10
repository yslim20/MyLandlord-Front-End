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


// ============ css ============== //
const Cont = styled.div`
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
    jutify-content:center;
    align-items: center;
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


// ============ Function ============== //
export default function LandlordProfile() {
    return(
        <Cont>
            <Header marginBottom="45px" marginLeft="4%" text="Jasper White"/>
            <LandlordSub/>
            <InfoCont>
                <LandlordAvatar />
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