import { useState } from "react";
import AddEmployeeForm from "./components/AddEmployeeForm";
import "./App.css";

type Employee = {
  id: number;
  firstName: string;
  departmentName: string;
};

export default function App() {
  const [employees, setEmployees] = useState<Employee[]>([
    { id: 1, firstName: "Alice", departmentName: "HR" },
    { id: 2, firstName: "Bob", departmentName: "IT" },
  ]);

  const departments = ["HR", "IT", "Finance", "Marketing"];

  function handleAddEmployee(firstName: string, departmentName: string) {
    setEmployees((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        firstName,
        departmentName,
      },
    ]);
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Employee Directory</h1>

      <ul>
        {employees.map((emp) => (
          <li key={emp.id}>
            {emp.firstName} – {emp.departmentName}
          </li>
        ))}
      </ul>

      <AddEmployeeForm
        departments={departments}
        onAddEmployee={handleAddEmployee}
      />
    </main>
  );
}
