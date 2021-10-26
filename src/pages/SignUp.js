import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios'

import RadioButton from '../comps/RadioButton'

const Cont = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Cardwrapper = styled.div`
  margin: 10px;
`


export default function SignUp() {
  return (
    <Cont>
      <RadioButton />    
    </Cont>
  )
}
