import type { Department, Employee } from "../types/Employee";

const ORG_KEY = "prf_departments";

export type PaginatedResult<T> = {
  data: T[];
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
};

export type EmployeeWithDepartment = Employee & {
  departmentName: string;
};

function loadDepartments(): Department[] {
  const raw = localStorage.getItem(ORG_KEY);
  if (!raw) return [];

  try {
    return JSON.parse(raw) as Department[];
  } catch {
    return [];
  }
}

function saveDepartments(depts: Department[]) {
  localStorage.setItem(ORG_KEY, JSON.stringify(depts));
}

function seedIfEmpty() {
  const current = loadDepartments();
  if (current.length > 0) return;

  const seeded: Department[] = [
    { name: "IT", employees: [] },
    { name: "HR", employees: [] },
    { name: "Finance", employees: [] },
  ];

  saveDepartments(seeded);
}

function paginate<T>(items: T[], page: number, pageSize: number): PaginatedResult<T> {
  const safePage = Math.max(1, page);
  const safePageSize = Math.max(1, pageSize);

  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / safePageSize);
  const startIndex = (safePage - 1) * safePageSize;
  const endIndex = startIndex + safePageSize;

  return {
    data: items.slice(startIndex, endIndex),
    page: safePage,
    pageSize: safePageSize,
    totalItems,
    totalPages,
  };
}

seedIfEmpty();

export const organizationRepo = {
  getDepartments(): Department[] {
    return loadDepartments();
  },

  getDepartmentsPaginated(page = 1, pageSize = 5): PaginatedResult<Department> {
    const departments = loadDepartments();
    return paginate(departments, page, pageSize);
  },

  getEmployeesPaginated(page = 1, pageSize = 5): PaginatedResult<EmployeeWithDepartment> {
    const departments = loadDepartments();

    const allEmployees: EmployeeWithDepartment[] = departments.flatMap((dept) =>
      dept.employees.map((employee) => ({
        ...employee,
        departmentName: dept.name,
      }))
    );

    return paginate(allEmployees, page, pageSize);
  },

  getDepartmentEmployeesPaginated(
    departmentName: string,
    page = 1,
    pageSize = 5
  ): PaginatedResult<Employee> {
    const departments = loadDepartments();
    const department = departments.find((d) => d.name === departmentName);

    if (!department) {
      return {
        data: [],
        page,
        pageSize,
        totalItems: 0,
        totalPages: 0,
      };
    }

    return paginate(department.employees, page, pageSize);
  },

  saveDepartments(depts: Department[]) {
    saveDepartments(depts);
  },

  addEmployee(departmentName: string, employee: Employee): Department[] {
    const depts = loadDepartments();

    const updated = depts.map((d) => {
      if (d.name !== departmentName) return d;
      return { ...d, employees: [...d.employees, employee] };
    });

    saveDepartments(updated);
    return updated;
  },
};