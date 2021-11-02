// import { useState, useEffect } from 'react';
import styled from 'styled-components';
import React from 'react';
import ReactDOM from 'react-dom';
// import axios from 'axios'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import RadioButton from '../comps/RadioButton';
import FullName from '../comps/FullName';
import Input from '../comps/Input';
import Checkbox from '../comps/Checkbox';
import VeriButton from '../comps/VeriButton';
import ImgBox from '../comps/ImgBox';
import Button from '../comps/Button'
import Header from '../comps/Header';

const Cont = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-left:3%;
`

const RadioCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`

const BttmCont = styled.div`
  display: flex;
  flex-wrap: row;
  flex-direction: row;
`

const ContLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  flex-direction: column; 
  justify-content: center;
`

const ContRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 30px;
  align-items: center;
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

export default function SignUp() {
  return (
    <Cont>
      <Header text="Sign Up"/>
      <RadioCont> 

      </RadioCont>
       

      <BttmCont>
        <ContLeft>        
          <FullName />  
          <Input />
          <Input title="User Name" />
          <Input title="Password" />
          <Input title="Confirm the Password" />
          
          <CheckCont> 
            <Checkbox />
            <Checkbox 
              value = "I agree to the terms and agreement"
              required = "required"
            />
          </CheckCont>

          <VeriButton />  

          <BttnCont>
            <Button 
              text = "Cancel"
              margintop = "0px"
              border = "1px solid #000"
              bgcolor = "#fff"
              hover = "box-shadow: none"
              width = "95%"
            />
            <Button 
              text = "Submit"
              margintop = "0px"
              width = "95%"
            />
          </BttnCont>
        </ContLeft>

        <ContRight>
          <ImgBox />
        </ContRight> 
      </BttmCont>  
    </Cont>
  )
}
