import { useState } from "react";
import Main from "./components/Main";

export default function App() {
  const [departments, setDepartments] = useState([
    {
      name: "Business Analyst, Online Banking",
      employees: [{ firstName: "Linda", lastName: "Analyst" }],
    },
    {
      name: "Contract Management",
      employees: [{ firstName: "Esra", lastName: "Sedge" }],
    },
  ]);

  return <Main departments={departments} />;
}
