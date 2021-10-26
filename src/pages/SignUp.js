// import { useState, useEffect } from 'react';
import styled from 'styled-components';
import React from 'react';
// import axios from 'axios'

import RadioButton from '../RadioButton';
import FullName from '../comps/FullName';
import Input from '../comps/Input';

const Cont = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

export default function SignUp() {
  return (
    <Cont>
      <RadioButton />  
      <FullName />  
      <Input />
      <Input title="User Name" />
      <Input title="Password" />
      <Input title="Confirm the Password" />

    </Cont>
  )
}
