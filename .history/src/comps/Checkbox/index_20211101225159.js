import styled from 'styled-components';
import router, {useRouter} from 'next/router';
import { useState, useEffect } from 'react';
import React, { Component } from 'react';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { deepPurple } from '@mui/material/colors';
import { Typography } from '@mui/material';


const Cont = styled.div`
  max-width: ${props=>props.cwidth};
  height: ${props=>props.cheight}px;
  margin-bottom: ${props=>props.cmarginB}px;
`

const FormBox = styled.form`
  width:100%;
  height: 100%; 
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const LabelFor = styled.label`
  width: ${props=>props.lwidth};
  margin-bottom: ${props=>props.lmarginB}px;
  margin-left: ${props=>props.lmarginL}px;
  box-sizing: border-box;
`;

const InputBox = styled.input`
  width: ${props=>props.iwidth}px;
  height: ${props=>props.iwidth}px;
  margin: 0;
  padding: 0;
  margin-right: ${props=>props.imarginR}px;
` 

const Title = styled.span`
  height: ${props=>props.theight}px;
  font-size: ${props=>props.fsize}px;
  margin: 0;  
  line-height: ${props=>props.lineheight}px;
` 

const Checkbox = ({
// container
  cwidth = "",
  cheight = 55,
  cmarginB = 0,

// label
  lwidth = "100%",
  lmarginB = 10,
  lmarginL = 20,

// input
  type = "radio",
  iwidth = 30,
  imarginR= 10,
  required = "",

// text
  theight = 30,
  fsize = 24,
  lineheight = 30,
  value = "Recieve news letter and update",
  e = "e",

}) => {  
  
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  const LabelText = styled.div`
    font-size: 24px
  `;
  const RadioCont = styled.div`
    margin-right:50px;
  `;

  return (
    // <Cont 
    //   cwidth={cwidth}
    //   cheight={cheight}
    //   cmarginB={cmarginB}
    // >
    //   <FormBox>
    //       <LabelFor
    //         lwidth={lwidth}
    //         lmarginB={lmarginB}
    //         lmarginL={lmarginL}
    //       >
    //         <InputBox
    //           type={type}
    //           value={value}
    //           iwidth={iwidth}
    //           imarginR={imarginR}
    //           required = {required}
    //           // checked={this.state.name === {valueT}}
    //           // onChange={this.onValChange}
    //         >
    //         </InputBox>
    //           <Title
    //             theight={theight}
    //             fsize={fsize}
    //             lineheight={lineheight}              
    //           >
    //             {value}
    //           </Title>
    //       </LabelFor>
    //   </FormBox>
    // </Cont>
    <div>
      <RadioGroup row aria-label="login" name="row-radio-buttons-group">
        <RadioCont>
            <FormControlLabel value="Tenant" control={<Radio
            {...controlProps({})}
            sx={{
              color: deepPurple["A400"],
              '& .MuiSvgIcon-root': {
                fontSize: 28,
              },
              '&.Mui-checked': {
                color: deepPurple["A400"],
              },
            }}
          />} label={<Typography fontWeight="500" fontSize="24px" >{value}</Typography>}>
          </FormControlLabel>
        </RadioCont>
      
      </RadioGroup>

      

    </div>
  );
}

export default Checkbox;