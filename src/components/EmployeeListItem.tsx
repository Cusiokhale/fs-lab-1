import React from "react";
import type { Employee } from "../types/Employee";

type EmployeeItemProps = {
  employee: Employee;
};

const EmployeeItem: React.FC<EmployeeItemProps> = ({ employee }) => {
  return (
    <li className="py-1 text-gray-700">
      {employee.firstName} {employee.lastName}
    </li>
  );
};

export default EmployeeItem;
