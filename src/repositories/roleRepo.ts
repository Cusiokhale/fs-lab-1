import type { Role } from "../types/Employee";

const ROLES_KEY = "prf_roles";

function loadRoles(): Role[] {
  const raw = localStorage.getItem(ROLES_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as Role[];
  } catch {
    return [];
  }
}

function saveRoles(roles: Role[]) {
  localStorage.setItem(ROLES_KEY, JSON.stringify(roles));
}

/* -------- SEED DATA IF EMPTY -------- */

function seedIfEmpty() {
  const current = loadRoles();
  if (current.length > 0) return;

  const seeded: Role[] = [
    { title: "CEO/Chair of Board", employee: { firstname: "Jo-Anne", lastname: "Sinclair" } },
    { title: "COO/VP Operations", employee: { firstname: "Jackson", lastname: "Smith" } },
    { title: "CFO/VP Administration", employee: { firstname: "Susan", lastname: "Thomas" } },
    { title: "VP Client Services", employee: { firstname: "Richa", lastname: "Kaur" } },
    { title: "CIO", employee: { firstname: "Josee", lastname: "Benjamin" } }
  ];

  saveRoles(seeded);
}

seedIfEmpty();

/* -------- REPOSITORY -------- */

export const roleRepo = {
  getAll(): Role[] {
    return loadRoles();
  },

  add(role: Role): Role[] {
    const roles = loadRoles();
    const updated = [...roles, role];
    saveRoles(updated);
    return updated;
  },

  roleTitleTaken(title: string): boolean {
    const roles = loadRoles();
    return roles.some(
      (r) => r.title.trim().toLowerCase() === title.trim().toLowerCase()
    );
  },
};