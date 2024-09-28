import React from "react";

export default function SearchBar(props) {
  const { handleEmployeeSearch, handleSelectDepartment, employeeSearch } =
    props;

  return (
    <header>
      <div>
        <h1>Meet the Team</h1>
      </div>
      <div className="search">
        <select
          className="search-dropdown-field"
          onChange={handleSelectDepartment} // Calls handleSelectDepartment when the dropdown value changes
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
          onChange={handleEmployeeSearch} // Calls handleEmployeeSearch when text is entered in the search field
          value={employeeSearch} // Binds the search input field to the employeeSearch state
        />
      </div>
    </header>
  );
}
