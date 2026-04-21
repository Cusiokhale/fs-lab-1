import { useEffect, useState } from "react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";

import AddEmployeeForm from "./AddEmployeeForm";
import DepartmentSection from "./DepartmentSection";
import { organizationRepo } from "../repositories/organizationRepo";
import { organizationService } from "../services/organizationService";
import "./EmployeesPage.css";
import type { Department } from "../types/Employee";
import type { EmployeeWithDepartment } from "../repositories/organizationRepo";

function EmployeesPage() {
  const [allDepartments, setAllDepartments] = useState<Department[]>([]);
  const [pagedDepartments, setPagedDepartments] = useState<Department[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [totalPages, setTotalPages] = useState(1);

  function groupEmployeesByDepartment(
    employees: EmployeeWithDepartment[],
    departments: Department[],
  ): Department[] {
    return departments
      .map((dept) => ({
        name: dept.name,
        employees: employees
          .filter((employee) => employee.departmentName === dept.name)
          .map(({ firstName, lastName }) => ({ firstName, lastName })),
      }))
      .filter((dept) => dept.employees.length > 0);
  }

  function loadData(currentPage = page, currentPageSize = pageSize) {
    const departments = organizationRepo.getDepartments();
    const paginatedEmployees = organizationRepo.getEmployeesPaginated(
      currentPage,
      currentPageSize,
    );

    setAllDepartments(departments);
    setPagedDepartments(
      groupEmployeesByDepartment(paginatedEmployees.data, departments),
    );
    setPage(paginatedEmployees.page);
    setPageSize(paginatedEmployees.pageSize);
    setTotalPages(paginatedEmployees.totalPages || 1);
  }

  useEffect(() => {
    loadData(1, pageSize);
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

    loadData(page, pageSize);
  }

  function handlePageSizeChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newPageSize = Number(e.target.value);
    loadData(1, newPageSize);
  }

  function handlePreviousPage() {
    if (page > 1) {
      loadData(page - 1, pageSize);
    }
  }

  function handleNextPage() {
    if (page < totalPages) {
      loadData(page + 1, pageSize);
    }
  }

  return (
    <div>
      <main>
        <div className="employees-page">
          <h2>Employees</h2>
          <p className="page-description">
            View all company employees and their positions.
          </p>

          <div style={{ marginBottom: "16px" }}>
            <label htmlFor="pageSize">Show: </label>
            <select
              id="pageSize"
              value={pageSize}
              onChange={handlePageSizeChange}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </select>
            <span style={{ marginLeft: "8px" }}>employees per page</span>
          </div>

          <div className="employee-list">
            {pagedDepartments.map((dept) => (
              <DepartmentSection key={dept.name} department={dept} />
            ))}

            <SignedIn>
              <AddEmployeeForm
                departments={allDepartments.map((dept) => dept.name)}
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

          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <button onClick={handlePreviousPage} disabled={page === 1}>
              Previous
            </button>

            <span style={{ margin: "0 12px" }}>
              Page {page} of {totalPages}
            </span>

            <button onClick={handleNextPage} disabled={page === totalPages}>
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default EmployeesPage;