// import { useState, useEffect } from 'react';
import styled from 'styled-components';
import React from 'react';
// import ReactDOM from 'react-dom';
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
import Navi from '../comps/Navi';
import Footer from '../comps/Footer';
import signup from "../scripts/auth/signup";
import RoutButton from '../comps/RoutButton';


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
  margin-bottom:50px;
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
  flex: 1.5;
  flex-direction: column;
  justify-content: center;
`

const ContRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-end;
  justify-content: center;
`

const CheckCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 50px;
  padding-left: 15px;
  box-sizing: border-box;
`

const VeriCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
      <Navi />

{/* // ============ Content Starts */}
      <Header text="Sign Up"/>
      <RadioCont>
        <RadioButton />
      </RadioCont>

{/* // ============ Signup form */}
      <MidCont> {/*  Form box starts */}
        <ContLeft>
          <FullName />
          {/* <Input/> repeated input field*/}
          <Input title="Email" type="email"/>
          <Input title="Password" type="password"/>
          <Input title="Confirm the Password" type="password"/>
{/* // ============ Check box */}
          <CheckCont>

            <Checkbox />
            <Checkbox
              value = "I agree to the terms and agreement"
              required = "required"
            />
          </CheckCont>


{/* // ============ Verification button */}
          <VeriCont>
            <VeriButton cwidth = "80%" cheight = "85"/>
          </VeriCont>
          
{/* // ============ Buttons */}
          <BttnCont>
            {/* <Button
              text = "Cancel"
              margintop = "0px"
              width = "95%"
            /> */}
            <RoutButton 
              text="Cancel"
              margintop = "0px"
              routeTo = "/"
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
          <ImgBox
            src="./images/ani_SignUp.gif"
            cwidth = "90%"
            cheight = "800px"
            height = "auto"
            objectFit = "contain"
          />
        </ContRight>
      </MidCont> {/*  Form box ends */}

{/* // ============ Footer Navigation */}
      <Footer />
    </Cont>
  )
}
