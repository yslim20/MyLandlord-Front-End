// import { useState, useEffect } from 'react';
import styled from 'styled-components';
import React from 'react';
// import axios from 'axios'

import RadioButton from '../RadioButton';
import FullName from '../comps/FullName';

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
    </Cont>
  )
}
