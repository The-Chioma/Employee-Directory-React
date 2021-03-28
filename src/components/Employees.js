import axios from "axios";
import React, { useState, useEffect } from "react";
import EmployeeTable from "./Table";
import { Table }from "react-bootstrap"

const Employees = () => {
  const [employee, setEmployee] = useState([]);
  //const [sortedEmployees, setSortedEmployees] = useState("");
  const [searchEmployees, setSearch] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState("fullName");

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=50")
      .then((res) => {
        setEmployee(res.data.results);
        console.log(res.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  // eslint-disable-next-line
  var filter = employee.filter((em) => {
    if (filteredEmployees === "fullName") {
      const fullName = `${em.name.first} ${em.name.last}`;
      return fullName.toLowerCase().includes(searchEmployees.toLowerCase());
    } else if (filteredEmployees === "Email") {
      return em.email.toLowerCase().includes(searchEmployees.toLowerCase());
    } else if (filteredEmployees === "Location") {
      const location = `${em.location.city}, ${em.location.state}, ${em.location.country}`;
      return location.toLowerCase().includes(searchEmployees.toLowerCase());
    }
  });
  return (
    <div>
      <div className="employee-app"
        employee={employee}
        setSearch={setSearch}
        setFilter={setFilteredEmployees}
      />
      <Table hover className = "table">
        <thead className="table-heading">
          <tr>
            <th>Picture</th>
            <th>Fullname</th>
            <th>Email</th>
            <th>Location</th>
            <th>
              DOB{" "}
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
                  fullname={`${em.name.first} ${em.name.last}`}
                  email={em.email}
                  location={`${em.location.city}, ${em.location.state}, ${em.location.country}`}
                  dateOfBirth={em.dob.date}
                />
              );
            })}
        </tbody>
    </Table>
    </div>
  );
};
export default Employees;
