import styled from 'styled-components';
import * as React from 'react';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Cont = styled.div`
  width: 90%;
  display:flex;
	flex: 1;
	flex-direction: column;
	justify-content:center;
	align-items:center;   
`

const theme = createTheme({
  palette: {
    primary: {
      main: '#A599EF',
      darker: '#5333ED', 
    },   
  }
});

export default function PaginationRow() {
  return (
    <Cont>      
      <Stack spacing={2}>
        <MuiThemeProvider theme={theme}>
          <Pagination
            count={10} 
            showFirstButton 
            showLastButton 
            color="primary"            
          />
        </MuiThemeProvider>
      </Stack>
      
    </Cont>
  );
}