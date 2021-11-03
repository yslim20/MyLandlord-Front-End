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


export default function ColorRadioButtons(
  label= "Tenant",
  
) {
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
    <div>
      <RadioGroup row aria-label="login" name="row-radio-buttons-group">
        <RadioCont>
            <FormControlLabel value="Tenant" control={<Radio
            {...controlProps('e')}
            sx={{
              color: deepPurple["A400"],
              '& .MuiSvgIcon-root': {
                fontSize: 28,
              },
              '&.Mui-checked': {
                color: deepPurple["A400"],
              },
            }}
          />} label={<Typography fontWeight="500" fontSize="24px" >Tenant</Typography>}>
          </FormControlLabel>
        </RadioCont>
        <FormControlLabel value="Landlord" control={<Radio
        {...controlProps('d')}
        sx={{
          color: deepPurple["A400"],
          '& .MuiSvgIcon-root': {
            fontSize: 28,
          },
          '&.Mui-checked': {
            color: deepPurple["A400"],
          },
        }}
      />} label={<Typography fontWeight="500" fontSize="24px" >Landlord</Typography>}/>
      </RadioGroup>

      

    </div>
  );
}


// const RadioButton = ({

// // RadioCont
//   mbttm = 80,
//   padding = 5,
//   mRight = 20,

// // LabelBox
//   lwidth = 158,
//   lheight = 53,

// // InputBox
//   iwidth = 36,
//   ilheight = 54,
//   marginR = 10,
//   onChange = () => {},
//   checked = "this.state.name === 'Tenant'",

// // TextCont
//   fsize = 36,
//   marginL = 5,
//   lineheight = 48,
//   text = "Tenant"
// }) => (
//   <RadioCont
//     mbttm={mbttm}
//     mRight={mRight}
//     padding={padding}    
//   >
//     {/* <FormCont>
//       <LabelBox
//         lwidth={lwidth}
//         lheight={lheight}
//       >
//         <InputBox
//           type="radio"
//           value="Tenant"
//           iwidth={iwidth}
//           ilheight={ilheight}
//           marginR={marginR}
//           checked={checked}
//           onChange={onChange} />

//         <TextCont
//           fsize={fsize}
//           marginL={marginL}
//           lineheight={lineheight}
//         >
//           {text}
//         </TextCont>
//       </LabelBox>
//     </FormCont> */}
//         <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
//         <FormControlLabel value="Tenant" control={<Radio />} label="Tenant" />
//         <FormControlLabel value="Landlord" control={<Radio />} label="Landlord" />
//       </RadioGroup>
      
//   </RadioCont>
// )

