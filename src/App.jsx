import React, { useEffect, useState } from "react";
import SearchResults from "./SearchResults.jsx";
import SearchBar from "./SearchBar.jsx";
import Employees from "./Employees.js";
import headerBackground from "/src/assets/header-bg-1.png";

export default function App() {
  const [employees, setEmployees] = useState(Employees);
  const [employeeSearch, setEmployeeSearch] = useState("");
  const [selectDepartment, setSelectDepartment] = useState("everyone");
  const [employeeSearchMatches, setEmployeeSearchMatches] = useState([]);

  const handleSelectDepartment = (event) => {
    const selectedOption = event.target.value;
    setSelectDepartment(selectedOption);
  };

  const handleEmployeeSearch = (event) => {
    const searchName = event.target.value;
    setEmployeeSearch(searchName);
  };

  useEffect(() => {
    const matchingResults = employees.filter((employee) => {
      const employeeName = employee.name.toLowerCase();
      const employeeSearched = employeeSearch.toLowerCase();
      let slicedName = employeeName.slice(0, employeeSearched.length);
      const employeeDepartment = employee.team;
      const selectedDepartment = selectDepartment;
      const employeeDepartmentMatch = employeeDepartment === selectDepartment;

      if (selectedDepartment === "everyone") {
        return slicedName === employeeSearched;
      }

      return employeeDepartmentMatch && slicedName === employeeSearched;
    });

    setEmployeeSearchMatches(matchingResults);
  }, [employeeSearch, selectDepartment]);

  const headerStyles = {
    background: `linear-gradient(
      180deg,
      #319e97 0%,
      rgba(49, 158, 151, 0) 59.9%,
      rgba(49, 158, 151, 0) 100%
    ),
    url(${headerBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="container">
      <SearchBar
        handleSelectDepartment={handleSelectDepartment}
        handleEmployeeSearch={handleEmployeeSearch}
        employeeSearch={employeeSearch}
        style={headerStyles}
      />
      <SearchResults
        employees={
          employeeSearchMatches.length > 0 ? employeeSearchMatches : []
        }
      />
    </div>
  );
}
