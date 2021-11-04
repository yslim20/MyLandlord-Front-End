import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';

// ============ Props
const TableCont = styled.div`
  width:90%;
  margin-left:10%;
  align-items:center;
  justify-content:center;
`

// ============ Props
const columns = [
  {
    field: 'avastar',
    headerName: 'Avastar',
    width: 150,
    type: 'img',
  },
  { field: 'name', 
    headerName: 'Name', 
    width: 180 
  },
  {
    field: 'property',
    headerName: 'Property',
    width: 400,
  },
  {
    field: 'rating',
    headerName: 'Rating',
    type: 'number',
    width: 140,
  },
];

//creat a array to store the fake data 
const rows =[

  { id:1, 
    avastar: 'img',
    name:'Jasper White',
    property:'4388 Buchanan St 1901 Burnaby BC V5C 6R8',
    rating:'5/10',
  },
  {
    id:2, 
    avastar: 'img',
    name:'Calvin Harris',
    property:'406 47th Ave E Vancouver BC V5W 2B4',
    rating:'2/10',
  },
  {
    id:3, 
    avastar: 'img',
    name:'Calvin Harris',
    property:'406 47th Ave E Vancouver BC V5W 2B4',
    rating:'2/10',
  },
  { id:4, 
    avastar: 'img',
    name:'Jasper White',
    property:'4388 Buchanan St 1901 Burnaby BC V5C 6R8',
    rating:'5/10',
  },
  {
    id:5, 
    avastar: 'img',
    name:'Calvin Harris',
    property:'406 47th Ave E Vancouver BC V5W 2B4',
    rating:'2/10',
  },
  {
    id:6, 
    avastar: 'img',
    name:'Calvin Harris',
    property:'406 47th Ave E Vancouver BC V5W 2B4',
    rating:'2/10',
  },
];


// ============ Function ============== //
export default function FilterOperators() {
//   const { data } = useDemoData({
//     dataSet: 'Employee',
//     rowLength: 10,

  return (
    <TableCont>
    <div style={{ height: 400, width: '90%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
    </TableCont>
  );
}
