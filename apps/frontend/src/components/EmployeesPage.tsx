import { useEffect, useState } from "react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";

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

            <SignedIn>
              <AddEmployeeForm
                departments={departments.map((dept) => dept.name)}
                onAddEmployee={handleAddEmployee}
              />
            </SignedIn>

            <SignedOut>
              <div
                style={{
                  marginTop: "20px",
                  padding: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  textAlign: "center",
                  backgroundColor: "#f9f9f9",
                }}
              >
                <p style={{ marginBottom: "10px" }}>
                  Please sign in to add a new employee.
                </p>
                <SignInButton />
              </div>
            </SignedOut>
          </div>
        </div>
      </main>
    </div>
  );
}

export default EmployeesPage;