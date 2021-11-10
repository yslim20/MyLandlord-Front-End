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
import CircleAvatar from '../comps/CircleAvatar';
import Input from '../comps/Input';
import Button from '../comps/Button';


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
const UserInfo = styled.div`
    display:flex;
    flex-direction: column;
`;

const InfoCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
    


const InfoForm = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 7%;
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
export default function LandlordEdit() {
    return(
        <Cont>
            <TopNav />
            <HeadCont>
                <Header marginBottom="45px" marginLeft="4%" text="Jasper White"/>
            </HeadCont>
            <UserInfo>
                <InfoCont>
                    <CircleAvatar src="/images/img_landlordProfile.png"/>
                    <InfoForm>
                        <SubHead text="Personal Information" fontSize="36" justifyContent="left" marginB="32"/>
                        <Input title="User Name" iheight="54" minWidth="574px"/>
                        <Input title="Password" type="password" iheight="54"/>
                        <Input title="Email Address" iheight="54"/>
                        <Input title="Phone Number" iheight="54"/>
                        <Button text="Save" margintop="80" minWidth="275" width="275" height="62" justify="right" routeTo="/"/>
                    </InfoForm>
                </InfoCont>
            </UserInfo>
            <ProfCont>
                <ProfileSub />
                <CenterBox>
                    <PropertyCard marginTop="25%" />
                </CenterBox>
            </ProfCont>
            <Footer />
        </Cont>
    )
}