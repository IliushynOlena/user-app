import { useState } from "react";
import UserCard from "./UserCard";

export function UserList(props) 
{

    const [users, setUsers] = useState(props.users);

   const addUser=()=>{

    const newUser = {
         id:5, 
         name: "Petro", 
         address: "Rivne", 
         position: "Teacher" 
    };

    //users.push(newUser);
    setUsers([...users, newUser]);
   }

   const clearUser = ()=>{
    setUsers([]);
   }

  return (
    <>
      <button onClick={addUser}>Create New User</button>
      <button onClick={clearUser}>Clear User</button>
      <h2>User List</h2>
      {users.map((u) => (<UserCard key={u.id}  {...u} />  ))}
    </>
  );
}
