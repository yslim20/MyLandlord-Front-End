import styled from 'styled-components';
import React from 'react';
import router from 'next/router';

// ============ Imported Comps ============== //
import TopNav from '../comps/TopNav';
import UserDrop from '../comps/UserDrop';
import ProfileSub from '../comps/ProfileSub';
import PropertyCard from '../comps/PropertyCard';
import Footer from '../comps/Footer';
import Header from '../comps/Header';
import SubHead from '../comps/SubHead';
import CircleAvatar from '../comps/CircleAvatar';
import Input from '../comps/Input';
import Button from '../comps/Button';

// ============ CSS ============== //
const Cont = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;  
`

const HeadCont = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  margin: 0 3%;
`;

const ProfCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 0 3%;
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
  width: 84px;
  height: 84px;
  border: none;
  border-radius: 50%; 
  :hover{
    transform: scale(0.95);
    transition-duration: 0.5s;    
`

const Icon = styled.img`
    justify-content:center;
    align-items: center;
    display: block;
    object-fit: contain;
    width: 84px;
    height: 84px;
    border-radius: 50%;  
`;

//building the page, 
export default function TenantProfile() {
	return(
		<Cont>
			<TopNav children = {<UserDrop/>} />

{/* =================== Layout */}
      <HeadCont>
          <Header marginBottom="45px" marginLeft="4%" text="Nancy J. Rojas"/>
          <IconCont onClick={()=>router.push('/TenantEdit')}> 
            <Icon src="/icons/icon_edit.png"/>
          </IconCont>
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

