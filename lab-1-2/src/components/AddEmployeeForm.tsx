import { useMemo, useState } from "react";

type AddEmployeeFormProps = {
  departments: string[];
  onAddEmployee: (firstName: string, departmentName: string) => void;
};

export default function AddEmployeeForm({ departments, onAddEmployee }: AddEmployeeFormProps) {
  const [firstName, setFirstName] = useState("");
  const [departmentName, setDepartmentName] = useState(departments[0] ?? "");
  const [errors, setErrors] = useState<string[]>([]);

  const departmentOptions = useMemo(() => departments, [departments]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const nextErrors: string[] = [];

    const trimmedName = firstName.trim();
    if (trimmedName.length < 3) nextErrors.push("First name must be at least 3 characters.");

    if (!departmentOptions.includes(departmentName)) {
      nextErrors.push("Please select an existing department.");
    }

    setErrors(nextErrors);

    if (nextErrors.length > 0) return;

    onAddEmployee(trimmedName, departmentName);

    setFirstName("");
    setDepartmentName(departmentOptions[0] ?? "");
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 24 }}>
      <h3>Add Employee</h3>

      {errors.length > 0 && (
        <ul>
          {errors.map((msg) => (
            <li key={msg} style={{ color: "crimson" }}>
              {msg}
            </li>
          ))}
        </ul>
      )}

      <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
        <label>
          First Name{" "}
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="e.g. Hema"
          />
        </label>

        <label>
          Department{" "}
          <select value={departmentName} onChange={(e) => setDepartmentName(e.target.value)}>
            {departmentOptions.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </label>

        <button type="submit">Add</button>
      </div>
    </form>
  );
}
