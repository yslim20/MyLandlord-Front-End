import styled from 'styled-components';
import React from 'react';
import Avatar from '../Avatar';
import ListHr from '../ListHr';
//https://cheatcode.co/tutorials/how-to-build-a-select-all-list-component-in-react-with-next-js

// const testUsers = [...Array(100)].map((item, index) => {
//   return {
//     _id: `user_${index}`,
//     name: "",
//     property: "",
//   };
// });

const TableCont = styled.div`
  width:100%;
`
const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  margin-left:5%;
  align-items:center;
  justify-content:center;

`
const TdCont = styled.div`
display:flex;
flex-direction: row;
justify-content:space-between;
align-items:center;
`

const Tr = styled.tr`
display:flex;
width: 80%;
justify-content:flex-start;
:hover {background-color: #ddd;};
font-size:35px;
font-style:regular;
margin-top:5%;
margin-left:5%;
`
const List = () => {
  //const [users] = useState(testUsers);
  //const [selectedUsers, setSelectedUsers] = useState([]);

  return (
    <TableCont>
      <Table>
                  <Tr>
                          <td scope="row"><Avatar/></td>
                          <td scope="row">Walter White</td>
                  </Tr>
                  <ListHr/>
        
                <Tr>  
                        <td scope="row"><Avatar/></td>
                        <td scope="row">Calvin Harris</td>
                </Tr>
                <ListHr/>
         
                <Tr>
                        <td scope="row"><Avatar/></td>
                        <td scope="row">Keven Troung</td>
                </Tr>
                <ListHr/>
      </Table>
    </TableCont>
  );
};


export default List;
