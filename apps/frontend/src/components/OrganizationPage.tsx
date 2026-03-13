import { useEffect, useState } from "react";
import { getRoles } from "../repositories/organization.repository";
import "./OrganizationPage.css";

function OrganizationPage() {
  const [roles, setRoles] = useState<any[]>([]);

  useEffect(() => {
    async function loadRoles() {
      const data = await getRoles();
      setRoles(data);
    }

    loadRoles();
  }, []);

  return (
    <div className="organization-page">
      <h2>Leadership and Management</h2>
      <p className="page-description">
        View our organizational leadership structure and key management roles.
      </p>

      <div className="employee-list">
        {roles.map((role, index) => (
          <div key={index} className="department-section">
            <h3>{role.title}</h3>
            <div className="employee-item">
              {role.employee.firstname} {role.employee.lastname}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrganizationPage;