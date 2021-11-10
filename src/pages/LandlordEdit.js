import styled from 'styled-components';
import React from 'react';

import ProfileSub from '../comps/ProfileSub';
import PropertyCard from '../comps/PropertyCard';
import Footer from '../comps/Footer';
import Header from '../comps/Header';
import SubHead from '../comps/SubHead';
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

const CenterBox = styled.div`
    display:flex;
    margin-top: 50px;
    justify-content: center;
    align-items:center;
`;


const CenterCont = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
`;

const IconCont = styled.button`
    display: flex;
    justify-content:center;
    width: 140px;
    height: 140px;
    border-radius: 50%; 
    border: none;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; 

    :hover{
        transform: scale(0.95);
    transition-duration: 0.5s;    
`

const Icon = styled.img`
    justify-content:center;
    align-items: center;
    display: block;
    object-fit: contain;
    width: 140px;
    height: 140px;
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
            <CenterCont>
                <IconCont onClick={()=>router.push('/NewProperty')}>
                    <Icon src="/icons/icon_addProperty.png/" />
                </IconCont>
            </CenterCont>
            <Footer />
        </Cont>
    )
}