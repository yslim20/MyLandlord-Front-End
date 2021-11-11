import styled from 'styled-components';
import React from 'react';
import router from 'next/router';

// ============ Imported Comps ============== //
import TopNav from '../comps/TopNav';
import UserDrop from '../comps/UserDrop';
import ProfileSub from '../comps/ProfileSub';
import ReviewCardImg from '../comps/ReviewCardImg';
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
  justify-content: flex-start;
  margin: 0 3%;
`;

const ProfCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 0 3%;
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

const IconCont = styled.a`
  display: block;
  width: 84px;
  height: 84px;
  border: none;
  border-radius: 50%; 
  bottom: 30px;

  :hover{
    transform: scale(0.95);
    transition-duration: 0.5s;    
`

const Icon = styled.img`
    display: block;
    object-fit: cover;
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
          <Header marginBottom="45px" text="Nancy J. Rojas"/>
          <IconCont onClick={()=>router.push('/TenantEdit')}> 
            <Icon src="/icons/icon_edit.png"/>
          </IconCont>
      </HeadCont>
      
      <UserInfo>
          <InfoCont>
              <CircleAvatar src="/images/img_tenant.png"/>
              <InfoForm>
                <SubHead text="Personal Information" fontSize="36" justifyContent="left" marginB="32"/>
                <Input title="First Name" iheight="54" minWidth="574px"/>
                <Input title="Last Name" iheight="54" minWidth="574px"/>
                <Input title="Password" type="password" iheight="54"/>
                <Input title="Email" iheight="54"/>
                <Input title="Phone Number" iheight="54"/>
                <Button text="Save" margintop="80" minWidth="275" width="275" height="62" justify="right" routeTo="/"/>
              </InfoForm>
          </InfoCont>
      </UserInfo>

      <ProfCont>
          <ProfileSub text="Reviews"/>
          <CenterBox>
              <ReviewCardImg 
                bgImage='url("/images/img_avatar_malcom.png")'
                text=""
                cborder="none"
                name="Landlord: Malcolm Christie"
                select="Selected: 6379 Longheed Hwy"
                review="I lived this home for about 1 year last year,, and it ways horrible... The room is dirty, the maintenance was not what I expected."
                boldDate="29 Sep 2021 19:01"
              />
          </CenterBox>
          <CenterBox>
              <ReviewCardImg 
                bgImage='url("/images/img_avatar_ruzica.png")'
                text=""
                cborder="none"
                name="Landlord: Ruzica Adamovic" 
                select="Selected: 101-5000 Imperial St"
                review="I lived this home for about 2 year last year,, and it I had a really great memory in her. The landlord is so kind and reasonable. So..."
                boldDate="15 Sep 2020 19:01"
              />
          </CenterBox>
          <CenterBox>
              <ReviewCardImg 
                bgImage='url("/images/img_avatar_xiu.png")'
                text=""
                cborder="none"
                name="Landlord: Xiu Juan Chiu" 
                select="Selected: 290 Fell Ave"
                review="I love this landlord!! She was sooo great. She was so helpful. Because I was new in Vancouver, she gave me all the information tha..."
                boldDate="10 Oct 2018 19:01" 
              />
          </CenterBox>
      </ProfCont>

      <Footer />

    </Cont>   

  )
}

