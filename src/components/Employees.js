import axios from "axios";
import React, { useState, useEffect } from "react";
import EmployeeTable from "./Table";
import { Table } from "react-bootstrap"

const Employees = () => {
  const [employee, setEmployee] = useState([]);
  const [searchEmployee, setSearch] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState("Name");

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=100")
      .then((res) => {
        setEmployee(res.data.results);
        console.log(res.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  // eslint-disable-next-line
  var filter = employee.filter((em) => {
    if (filteredEmployees === "Name") {
      const name = `${em.name.first} ${em.name.last}`;
      return name.toLowerCase().includes(searchEmployee.toLowerCase());
    } else if (filteredEmployees === "Email") {
      return em.email.toLowerCase().includes(searchEmployee.toLowerCase());
    } else if (filteredEmployees === "Location") {
      const location = `${em.location.city}, ${em.location.state}, ${em.location.country}`;
      return location.toLowerCase().includes(searchEmployee.toLowerCase());
    }
  });
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

//   const handleFilter = (event) => {
//     setFilteredEmployees(event.target.value);
//   };
  return (
      <>
    <div className="input-group mb-3" align="center">
      {/* <select
        className="form-options"
        id="inputGroupSelect02"
        onChange={handleFilter}
        as="select"
      >
        <option defaultValue>Choose...</option>
        <option>Name</option>
        <option>Email</option>
        <option>Location</option>
      </select>
      <br /> */}
      <input onChange={handleSearch} type= "text" placeholder = "Enter Employee Name Here"></input>
    </div>  
    <div>
      <div
        employee={employee}
        setSearch={setSearch}
        setFilteredEmployees={setFilteredEmployees}
      />
      <Table hover>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Email</th>
            <th>Location</th>
            <th>
              Date of Birth{" "}
            </th>
          </tr>
        </thead>
        <tbody>
          {filter &&
            filter.map((em) => {
              return (
                  <EmployeeTable
                  key={em.cell}
                  picture={em.picture.thumbnail}
                  Name={`${em.name.first} ${em.name.last}`}
                  email={em.email}
                  location={`${em.location.city}, ${em.location.state}, ${em.location.country}`}
                  dateOfBirth={em.dob.date}
                />
              );
            })}
        </tbody>
    </Table>
    </div>
    </>
  );
};
export default Employees;
