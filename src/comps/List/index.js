import styled from 'styled-components';
import React from 'react';

//https://cheatcode.co/tutorials/how-to-build-a-select-all-list-component-in-react-with-next-js


const testUsers = [...Array(100)].map((item, index) => {
  return {
    _id: `user_${index}`,
    name: "",
    property: "",
  };
});



const List = () => {
  //const [users] = useState(testUsers);
  //const [selectedUsers, setSelectedUsers] = useState([]);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            text={text}
          </tr>
        </thead>
        <tbody>
              <tr>
                ...
              </tr>
        </tbody>
      </table>
    </div>
  );
};


export default List;
