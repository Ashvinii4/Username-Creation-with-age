
import { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


// const DUMMY_DATA=[
//   {id:1,username:'sagar',age:30},
//   {id:2,username:'rahul',age:31},
//   {id:3,username:'manoj',age:32},
// ]


function App() {

  const [usersList, setUsersList] = useState([])
  
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList, { name: uName, age: uAge}
         ]
       }
     )
   }
  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
