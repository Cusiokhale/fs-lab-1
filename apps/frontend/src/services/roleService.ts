import type { Role } from "../types/Employee";
import { roleRepo } from "../repositories/roleRepo";

export type CreateRoleResult =
  | { ok: true }
  | { ok: false; errors: { firstName?: string; roleTitle?: string } };

export const roleService = {
  createRole(firstName: string, lastName: string, roleTitle: string): CreateRoleResult {
    const errors: { firstName?: string; roleTitle?: string } = {};

    if (!firstName || firstName.trim().length < 3) {
      errors.firstName = "First name must be at least 3 characters.";
    }

    if (!roleTitle || roleTitle.trim().length === 0) {
      errors.roleTitle = "Role is required.";
    } else if (roleRepo.roleTitleTaken(roleTitle)) {
      errors.roleTitle = "This role is already occupied.";
    }

    if (Object.keys(errors).length > 0) return { ok: false, errors };

    const newRole: Role = {
      title: roleTitle.trim(),
      employee: {
        firstname: firstName.trim(),
        lastname: (lastName || "").trim(),
      },
    };

    roleRepo.add(newRole);
    return { ok: true };
  },
};