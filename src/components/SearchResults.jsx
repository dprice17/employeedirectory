import React from "react";
import { v4 as uuidv4 } from "uuid";
import twitterLogo from "/src/assets/twitter1.png";
import linkdenLogo from "/src/assets/linkden1.png";

export default function SearchResults(props) {
  const { employees } = props;

  const handleEmployeeProfileRendering = () => {
    const employeeProfiles = employees.map((employee) => {
      const employeeBioParagraphs = employee.bio
        .split("</p>")
        .filter((sentence) => sentence.trim() !== "")
        .map((sentence, index) => (
          <p key={index}>{sentence.replace(/<p>/g, "")}</p>
        ));

      const employeeImagePathSplit = employee.image.split("/");
      const employeeJpgFile = employeeImagePathSplit[2];

      return (
        <div className="employee-profile" key={uuidv4()}>
          <img src={employee.image} alt="Employee" />
          <div className="employee-profile-name-title-container">
            <p>{employee.name}</p>
            <p>{employee.title}</p>
          </div>
          <div className="employee-profile-bio">{employeeBioParagraphs}</div>
          <div className="social-icons-container">
            {employee.social.twitter && (
              <a href="">
                <img src={twitterLogo} alt="Twitter" />
              </a>
            )}
            {employee.social.linkedin && (
              <a href="#">
                <img src={linkdenLogo} alt="LinkedIn" />
              </a>
            )}
          </div>
        </div>
      );
    });

    if (employees.length === 0) {
      return <p className="no-results-notification">No results found</p>;
    } else {
      return employeeProfiles;
    }
  };

  return (
    <div className="employee-results-container">
      {handleEmployeeProfileRendering()}
    </div>
  );
}
