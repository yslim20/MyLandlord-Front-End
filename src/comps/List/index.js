import styled from 'styled-components';
import React from 'react';
import Avatar from '../Avatar'
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
  width: 30%;
  border-collapse: collapse;
  margin-left:35%;
  align-items:center;
  justify-content:center;
`

const Tr = styled.tr`
:hover {background-color: #ddd;};
font-size:35px;
font-style:regular;
margin-top:50px;


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
     <Tr>
            <td scope="row"><Avatar/></td>
            <td scope="row">Joyce Chan</td>
     </Tr>
      </Table>
    </TableCont>
  );
};


export default List;
