import { useEffect, useState } from "react";
import AddEmployeeForm from "./AddEmployeeForm";
import DepartmentSection from "./DepartmentSection";
import { organizationRepo } from "../repositories/organizationRepo";
import { organizationService } from "../services/organizationService";
import "./EmployeesPage.css";
import type { Department } from "../types/Employee";

function EmployeesPage() {
  const [departments, setDepartments] = useState<Department[]>([]);

  useEffect(() => {
    const loaded = organizationRepo.getDepartments();
    setDepartments(loaded);
  }, []);

  function handleAddEmployee(
    firstName: string,
    lastName: string,
    departmentName: string,
  ) {
    const result = organizationService.createEmployee(departmentName, {
      firstName,
      lastName,
    });

    if (!result.ok) {
      const deptMsg = result.errors.department ? `\n- ${result.errors.department}` : "";
      const firstMsg = result.errors.firstName ? `\n- ${result.errors.firstName}` : "";
      alert(`Please fix these issues:${deptMsg}${firstMsg}`);
      return;
    }

    const updated = organizationRepo.getDepartments();
    setDepartments(updated);
  }

  return (
    <div>
      <main>
        <div className="employees-page">
          <h2>Employees</h2>
          <p className="page-description">
            View all company employees and their positions.
          </p>

          <div className="employee-list">
            {departments.map((dept) => (
              <DepartmentSection key={dept.name} department={dept} />
            ))}

            <AddEmployeeForm
              departments={departments.map((dept) => dept.name)}
              onAddEmployee={handleAddEmployee}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default EmployeesPage;