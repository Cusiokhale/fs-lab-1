import { useState } from "react";
import { roleService } from "../services/roleService";

export function useRoleForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [roleTitle, setRoleTitle] = useState("");

  const [errors, setErrors] = useState<{ firstName?: string; roleTitle?: string }>({});

  function submit(): { ok: boolean } {
    const result = roleService.createRole(firstName, lastName, roleTitle);

    if (!result.ok) {
      setErrors(result.errors);
      return { ok: false };
    }

    setErrors({});
    setFirstName("");
    setLastName("");
    setRoleTitle("");
    return { ok: true };
  }

  return {
    firstName, setFirstName,
    lastName, setLastName,
    roleTitle, setRoleTitle,
    errors,
    submit,
  };
}