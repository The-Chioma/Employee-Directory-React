import React from 'react';

const EmployeeTable = ({
  email,
  picture,
  Name,
  location,
  dateOfBirth
}) => {
  return (
    <tr>
      <td><img src={picture} alt= "professional employee pic"></img></td>
      <td>{Name}</td>
      <td>{email}</td>
      <td>{location}</td>
      <td>{dateOfBirth.slice(0,10)}</td>
    </tr>
  );
};

export default EmployeeTable;