import React, { useEffect, useState } from "react";
import SearchResults from "./SearchResults.jsx";
import Employees from "./Employees.js";

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
      const name = employee.name.toLowerCase();
      const employeeSearched = employeeSearch.toLowerCase();
      const employeeDepartment = employee.team;
      const selectedDepartment = selectDepartment;

      if (selectedDepartment === "everyone") {
        return name.slice(0, employeeSearched.length) === employeeSearched;
      }
      return (
        employeeDepartment === selectedDepartment &&
        name.slice(0, employeeSearched.length) === employeeSearched
      );
    });

    setEmployeeSearchMatches(matchingResults);
  }, [employeeSearch, selectDepartment]);

  return (
    <div className="container">
      <header>
        <div>
          <h1>Meet the Team</h1>
        </div>
        <div className="search">
          <select
            className="search-dropdown-field"
            onChange={handleSelectDepartment}
          >
            <option value="everyone">Everyone</option>
            <option value="leadership">Leadership</option>
            <option value="sales">Sales</option>
            <option value="customer service">Customer Service</option>
            <option value="product">Product</option>
          </select>
          <input
            type="text"
            placeholder="search name"
            className="search-input-field"
            onChange={handleEmployeeSearch}
            value={employeeSearch}
          />
        </div>
      </header>

      <SearchResults
        employees={
          employeeSearchMatches.length > 0 ? employeeSearchMatches : employees
        }
      />
    </div>
  );
}
