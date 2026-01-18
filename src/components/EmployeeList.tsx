import React from "react";
import type { Employee } from "../types/Employee";
import EmployeeListItem from "./EmployeeListItem";

type EmployeeListProps = {
  employees: Employee[];
};

const EmployeeList: React.FC<EmployeeListProps> = ({ employees }) => {
  if (employees.length === 0) {
    return (
      <ul className="list-disc list-inside ml-4">
        <li className="py-1 text-gray-500 italic">No employees listed</li>
      </ul>
    );
  }

  return (
    <ul className="list-disc employee-list list-inside ml-4">
      {employees.map((employee) => (
        <EmployeeListItem
          key={`${employee.firstName}-${employee.lastName}`}
          employee={employee}
        />
      ))}
    </ul>
  );
};

export default EmployeeList;
