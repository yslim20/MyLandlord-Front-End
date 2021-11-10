import * as React from 'react';
import styled from 'styled-components';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { PaginationItem } from '@mui/material';

// import { ThemeProvider, createTheme } from '@mui/system';

// const theme = createTheme({
//   // palette: {
//   //   background: {
//   //     paper: '#fff',
//   //   },
//   //   text: {
//   //     primary: '#5333ED',
//   //     secondary: '#A599EF',
//   //   },
//   //   action: {
//   //     active: '#5333ED',
//   //   },
//   //   success: {
//   //     dark: '#5333ED',
//   //   },
//   // },
//   components: {
//     // Name of the component
//     MuiButton: {
//       styleOverrides: {
//         // Name of the slot
//         root: {
//           // Some CSS
//           fontSize: '1rem',
//           primary: '#5333ED',
//         },
//       },
//     },
//   },
// });

const Cont = styled.div`
  width: ${props=>props.cwidth};
	display:flex;
	flex-direction: column;
  justify-content: center;
	align-items: center;
	margin: 0;
  padding: 0 68px 0 68px;
`

const PaginationRow = ({
  cwidth ="100%",
  color="primary",

}) => {

  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    // <ThemeProvider theme={theme}>
    <Cont cwidth={cwidth}>
       <Stack 
        className="page_cont"
        spacing={2}
        sx={{
          minWidth: 800,
          
          
        }}
       
       >
        <Pagination 
          count={10} defaultPage={6} siblingCount={0} boundaryCount={2} 
          showFirstButton 
          showLastButton 
          page={page} 
          onChange={handleChange} 
          color = {color}
          className="page_bttn"
          
          // sx={{
          //   color: 'success.dark',
          //   p: 2,
          //   minWidth: 800,
          // }}
        />
      </Stack>
    </Cont>     
    // </ThemeProvider>
  );
}

export default PaginationRow;