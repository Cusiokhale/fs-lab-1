import React from "react";
import type { Employee } from "../types/Employee";
import "./EmployeeList.css";

type EmployeeListProps = {
  employees: Employee[];
};

const EmployeeList: React.FC<EmployeeListProps> = ({ employees }) => {
  if (employees.length === 0) {
    return (
      <div className="employee-list">
        <div className="employee-item empty">
          <div className="employee-name">No employees listed</div>
        </div>
      </div>
    );
  }

  return (
    <div className="employee-list">
      {employees.map((employee) => (
        <div 
          key={`${employee.firstName}-${employee.lastName}`} 
          className="employee-item"
        >
          <div className="employee-name">
            {employee.firstName} {employee.lastName}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;