import { useEffect, useState } from "react";
import type { Role } from "../types/Employee";
import "./OrganizationPage.css";
import { roleRepo } from "../repositories/roleRepo";
import AddRoleForm from "./AddRoleForm";

function OrganizationPage() {
  const [roles, setRoles] = useState<Role[]>([]);

  function reloadRoles() {
    setRoles(roleRepo.getAll());
  }

  useEffect(() => {
    reloadRoles();
  }, []);

  return (
    <div className="organization-page">
      <h2>Leadership and Management</h2>
      <p className="page-description">
        View our organizational leadership structure and key management roles.
      </p>

      <div className="employee-list">
        {roles.map((r) => (
          <div key={r.title} className="department-section">
            <h3>{r.title}</h3>
            <div className="employee-item">
              {r.employee.firstname} {r.employee.lastname}
            </div>
          </div>
        ))}
      </div>

      <AddRoleForm onRoleAdded={reloadRoles} />
    </div>
  );
}

export default OrganizationPage;