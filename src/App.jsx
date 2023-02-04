import AddUser from "./components/User/AddUser";
import React, { useState } from "react";
import UserList from "./components/User/UserList";

function App() {
  const [userList,setUserList] = useState([]);
  const addUserHandler = (enteredUsername,enteredAge) => {
    setUserList((prevUserList) => (
      [...prevUserList,{name : enteredUsername,age : enteredAge,id : Math.random().toString()}]
    ));
  }

  return (
    <div className="App">
      <AddUser onAddUser = {addUserHandler} />
      <UserList users = {userList} />
    </div>
  )
}

export default App
