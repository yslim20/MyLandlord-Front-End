import styled from 'styled-components';
import React from 'react';

//https://cheatcode.co/tutorials/how-to-build-a-select-all-list-component-in-react-with-next-js


// const testUsers = [...Array(100)].map((item, index) => {
//   return {
//     _id: `user_${index}`,
//     name: "",
//     property: "",
//   };
// });

const TableCont = styled.div`
max-width: 650px;

`
const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid purple;
`
// const Tr = styled.table.tr`
// padding: 20px;
// `
// const Tb = styled.table.tbody`
// border: 3px solid;
// `


const List = () => {
  //const [users] = useState(testUsers);
  //const [selectedUsers, setSelectedUsers] = useState([]);

  return (
    <TableCont>
      <Table className="table">
     <tb>
     <tr>
            <th scope="row">avatar</th>
            <td>Name</td>
     </tr>
     <tr>
            <th scope="row">avatar</th>
            <td>Name</td>
     </tr>
     </tb>
      </Table>
    </TableCont>
  );
};


export default List;
