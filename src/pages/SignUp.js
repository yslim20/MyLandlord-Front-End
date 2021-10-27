// import { useState, useEffect } from 'react';
import styled from 'styled-components';
import React from 'react';
// import axios from 'axios'

import RadioButton from '../comps/RadioButton';
import FullName from '../comps/FullName';
import Input from '../comps/Input';
import Checkbox from '../comps/Checkbox';
import VeriButton from '../comps/VeriButton';
import ImgBox from '../comps/ImgBox';
import SubButton from '../comps/SubButton';

const Cont = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

const BttmCont = styled.div`
  display: flex;
  flex-wrap: row;
  flex-direction: row;
`

const ContLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex: 1;  
`

const ContRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 30px;
  align-items: center;
  justify-content: center;
`

export default function SignUp() {
  return (
    <Cont>
      <RadioButton />  

      <BttmCont>
        <ContLeft>        
          <FullName />  
          <Input />
          <Input title="User Name" />
          <Input title="Password" />
          <Input title="Confirm the Password" />
          <Checkbox />
          <VeriButton />  

          <SubButton 
        
          />

        </ContLeft>

        <ContRight>
          <ImgBox />
        </ContRight> 
      </BttmCont>  
    </Cont>
  )
}
