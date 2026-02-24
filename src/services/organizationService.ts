import type { Employee } from "../types/Employee";
import { organizationRepo } from "../repositories/organizationRepo";

export type CreateEmployeeResult =
  | { ok: true }
  | { ok: false; errors: { department?: string; firstName?: string } };

export const organizationService = {
  createEmployee(departmentName: string, employee: Employee): CreateEmployeeResult {
    const errors: { department?: string; firstName?: string } = {};

    const departments = organizationRepo.getDepartments();
    const deptExists = departments.some((d) => d.name === departmentName);

    if (!deptExists) {
      errors.department = "Select a valid department.";
    }

    if (!employee.firstName || employee.firstName.trim().length < 3) {
      errors.firstName = "First name must be at least 3 characters.";
    }

    if (Object.keys(errors).length > 0) {
      return { ok: false, errors };
    }

    organizationRepo.addEmployee(departmentName, {
      firstName: employee.firstName.trim(),
      lastName: (employee.lastName || "").trim(),
    });

    return { ok: true };
  },
};