
import './App.css';

import { Timer } from "./components/Timer";
import UserCard from "./components/UserCard";
import { UserList } from "./components/UserList";


const USERS = [
  { id:1, name: "Vlad", address: "Rivne", position: "Teacher" },
  { id:2,name: "Olga", address: "Kyiv", position: "Manager" },
  { id:3,name: "Katya", address: "Lviv", position: "Lead" },
];

// functional component
export default function App(/* parameters */) {
  // ... code ...

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>Hello React!</p>
      {/* <UserCard name="Vlad" address="Rivne" position="Teacher" />
      <UserCard name="Olga" address="Kyiv" position="Manager" />
      <UserCard name="Katya" address="Lviv" position="Lead" /> */}
      <UserList users={USERS} />

      <Timer start="30" />
    </div>
  );
}
