// import { useState, useEffect } from 'react';
import styled from 'styled-components';
import React from 'react';
import ReactDOM from 'react-dom';
// import axios from 'axios'

// ============ Imported Comps ============== //
import RadioButton from '../comps/RadioButton';
import FullName from '../comps/FullName';
import Input from '../comps/Input';
import Checkbox from '../comps/Checkbox';
import VeriButton from '../comps/VeriButton';
import ImgBox from '../comps/ImgBox';
import Button from '../comps/Button'
import Header from '../comps/Header';
import TopNav from '../comps/TopNav'
import Footer from '../comps/Footer';

import signup from "../scripts/auth/signup";

// ============ css ============== //
const Cont = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 0 4% 0 4%;
  box-sizing: border-box;
`

const RadioCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom:30px;
  padding-left:5px;
`
// ============ Form box
const MidCont = styled.form`
  display: flex;
  flex: 1;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content:center;
	align-items:center;
`

const ContLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
<<<<<<< HEAD
  flex: 1;
  flex-direction: column;
=======
  flex: 1.5;
  flex-direction: column;
>>>>>>> 8ef4b89eb037dddf009ec7cfd3bc87afafc8b662
  justify-content: center;
`

const ContRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 30px;
  align-items: flex-end;
  justify-content: center;
`

const CheckCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 30px;
  padding-left: 15px;
  box-sizing: border-box;
`

const BttnCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
// ============ Function ============== //
// ============ Layout
export default function SignUp() {
  return (
    <Cont>
{/* // ============ Top Navigation */}
      <TopNav />

{/* // ============ Content Starts */}
      <Header text="Sign Up"/>
      <RadioCont>
        <RadioButton />
      </RadioCont>

<<<<<<< HEAD
      <BttmCont onClick={()=>signup(event)}>
        <ContLeft>
          <FullName />
=======
{/* // ============ Signup form */}
      <MidCont> {/*  Form box starts */}
        <ContLeft>
          <FullName />
>>>>>>> 8ef4b89eb037dddf009ec7cfd3bc87afafc8b662
          <Input />
          <Input title="Email" type="email"/>
          <Input title="Password" type="password"/>
          <Input title="Confirm the Password" type="password"/>
<<<<<<< HEAD
          <CheckCont>
=======

{/* // ============ Check box */}
          <CheckCont>
>>>>>>> 8ef4b89eb037dddf009ec7cfd3bc87afafc8b662
            <Checkbox />
            <Checkbox
              value = "I agree to the terms and agreement"
              required = "required"
            />
          </CheckCont>

<<<<<<< HEAD
          <VeriButton />
=======
{/* // ============ Verification button */}
          <VeriButton />
>>>>>>> 8ef4b89eb037dddf009ec7cfd3bc87afafc8b662

{/* // ============ Buttons */}
          <BttnCont>
            <Button
              text = "Cancel"
              margintop = "0px"
              width = "95%"
            />
            <Button
              text = "Submit"
              margintop = "0px"
              border = "none"
              bgcolor = "#5333ED"
              color="#fff"
              hover = "box-shadow: none"
              width = "95%"
            />
          </BttnCont>
        </ContLeft>

{/* // ============ Image */}
        <ContRight>
<<<<<<< HEAD
          <ImgBox src="./images/SignUpImg.svg" />
        </ContRight>
      </BttmCont>
      <Footer />
=======
          <ImgBox
            src="./images/img_signup.png"
            cwidth = "90%"
            // cheight = "1000px"
            // objectFit = "contain"
          />
        </ContRight>
      </MidCont> {/*  Form box ends */}

{/* // ============ Footer Navigation */}
      <Footer />
>>>>>>> 8ef4b89eb037dddf009ec7cfd3bc87afafc8b662
    </Cont>
  )
}
