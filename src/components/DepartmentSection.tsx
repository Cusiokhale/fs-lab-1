import React from "react";
import type { Department } from "../types/Employee";
import EmployeeList from "./EmployeeList";

type DepartmentSectionProps = {
  department: Department;
};

const DepartmentSection: React.FC<DepartmentSectionProps> = ({ department }) => {
  return (
    <section className="mb-6 bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        {department.name}
      </h2>

      <EmployeeList employees={department.employees} />
    </section>
  );
};

export default DepartmentSection;
