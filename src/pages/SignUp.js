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

const Cont = styled.div`
  display: flex;
  flex-wrap: wrap;
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
`

export default function SignUp() {
  return (
    <Cont>
      <ContLeft>
        <RadioButton />  
        <FullName />  
        <Input />
        <Input title="User Name" />
        <Input title="Password" />
        <Input title="Confirm the Password" />
        <Checkbox />
        <VeriButton />        
      </ContLeft>

      <ContRight>
        <ImgBox />
      </ContRight>     
    </Cont>
  )
}
