import styled from 'styled-components';
import React from 'react';

// ============ Imported Comps ============== //
import TopNav from '../comps/TopNav';
import Input from '../comps/Input';
import ImgBox from '../comps/ImgBox';
import Button from '../comps/Button'
import Subhead from '../comps/Subhead';

import InputGroup from '../comps/InputGroup';

// ============ CSS ============== //
const Cont = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

const InputCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
	padding: 0px 68px;
	margin-bottom: 100px;
`

// ============ Function ============== //
// ============ Layout
export default function ContactUs() {
	return(
		<Cont>
{/* // ============ Top Navigation */}
			<TopNav/>

{/* // ============ Content Start */}
      <InputCont> 
				<InputGroup />
			</InputCont>			
    </Cont>
	)
}