import type { Department, Employee } from "../types/Employee";

const ORG_KEY = "prf_departments";

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

seedIfEmpty();

export const organizationRepo = {
  getDepartments(): Department[] {
    return loadDepartments();
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