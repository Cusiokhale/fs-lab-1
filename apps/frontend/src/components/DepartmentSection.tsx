import React from "react";
import type { Department } from "../types/Employee";
import EmployeeList from "./EmployeeList";
import "./EmployeeList.css";

type DepartmentSectionProps = {
  department: Department;
};

const DepartmentSection: React.FC<DepartmentSectionProps> = ({ department }) => {
  return (
    <section>
      <h3 className="department-name">
        {department.name}
      </h3>

      <EmployeeList employees={department.employees} />
    </section>
  );
};

export default DepartmentSection;
