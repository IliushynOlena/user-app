import React from "react";


// create new component
// props - input parameters
export default function UserCard(props) {
  //({ name, address, position })

  // destructurization: {p1, p2} = object
  const { name, address, position } = props;

  return (
    // component markup
    // React.Fragment: <>
    <div className="user-card">
      <h3>User Card</h3>
      <p>Name: {name}</p>
      <p>Address: {address}</p>
      <p>Position: {position}</p>
    </div>
  );
}
