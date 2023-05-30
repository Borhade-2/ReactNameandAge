import logo from './logo.svg';
import './App.css';
import AddUser from './components/Users/AddUser';
import { useState } from 'react';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList,setUsersList]=useState([]);
  const addUserHandler=(uName,uAge)=>
  {
    setUsersList((prevUsers)=>{
      return [{
        userName:uName,
        userAge:uAge,
        id:Math.random().toString()
      },...prevUsers]
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;
