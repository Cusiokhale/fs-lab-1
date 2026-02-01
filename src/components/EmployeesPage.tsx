import { useState } from "react";
import AddEmployeeForm from "./AddEmployeeForm";
import DepartmentSection from "./DepartmentSection";
import "./EmployeesPage.css";

function EmployeesPage() {
  const [departments, setDepartments] = useState([
    {
      name: "Business Analyst, Online Banking",
      employees: [{ firstName: "Linda", lastName: "Analyst" }],
    },
    {
      name: "Contract Management",
      employees: [{ firstName: "Esra", lastName: "Sedge" }],
    },
    {
      name: "Compliance Management",
      employees: [{ firstName: "Pranee", lastName: "Tan" }],
    },
    {
      name: "IT End User Service Desk",
      employees: [{ firstName: "Karmen", lastName: "Spruce" }],
    },
    {
      name: "IT End User Computing",
      employees: [{ firstName: "Haydar", lastName: "Katirci" }],
    },
    {
      name: "IT Telecom and Infrastructure",
      employees: [{ firstName: "Jill", lastName: "Harkness" }],
    },
    {
      name: "Data Center and Hosting Services",
      employees: [{ firstName: "Tim", lastName: "Morrison" }],
    },
    {
      name: "IT Risk Management",
      employees: [{ firstName: "Aleksandr", lastName: "Milosevic" }],
    },
    {
      name: "IT Project Management Office",
      employees: [{ firstName: "Jim", lastName: "Wingnut" }],
    },
    {
      name: "Administration",
      employees: [
        { firstName: "Zoë", lastName: "Robins" },
        { firstName: "Madeleine", lastName: "Madden" },
      ],
    },
    {
      name: "Audit",
      employees: [
        { firstName: "Josha", lastName: "Sadowski" },
        { firstName: "Kate", lastName: "Fleetwood" },
      ],
    },
    {
      name: "Banking Operations",
      employees: [
        { firstName: "Priyanka", lastName: "Bose" },
        { firstName: "Hammed", lastName: "Animashaun" },
        { firstName: "Álvaro", lastName: "Morte" },
        { firstName: "Taylor", lastName: "Napier" },
        { firstName: "Alan", lastName: "Simmonds" },
        { firstName: "Gil", lastName: "Cardinal" },
      ],
    },
    {
      name: "Communications",
      employees: [
        { firstName: "Richard", lastName: "J. Lewis" },
        { firstName: "Randy", lastName: "Bradshaw" },
      ],
    },
    {
      name: "Corporate Services",
      employees: [
        { firstName: "Tracey", lastName: "Cook" },
        { firstName: "Lubomir", lastName: "Mykytiuk" },
        { firstName: "Dakota", lastName: "House" },
      ],
    },
    {
      name: "Facilities",
      employees: [
        { firstName: "Lori", lastName: "Lea Okemah" },
        { firstName: "Renae", lastName: "Morrisseau" },
        { firstName: "Rick", lastName: "Belcourt" },
        { firstName: "Selina", lastName: "Hanusa" },
      ],
    },
    {
      name: "Financial Services",
      employees: [
        { firstName: "Buffy", lastName: "Gaudry" },
        { firstName: "Shaneen", lastName: "Ann Fox" },
        { firstName: "Allan", lastName: "Little" },
        { firstName: "Danny", lastName: "Rabbit" },
        { firstName: "Jesse", lastName: "Ed Azure" },
      ],
    },
    {
      name: "Human Resources",
      employees: [
        { firstName: "Stacy", lastName: "Da Silva" },
        { firstName: "Vladimír", lastName: "Valenta" },
        { firstName: "Samone", lastName: "Sayeses-Whitney" },
        { firstName: "Paul", lastName: "Coeur" },
        { firstName: "Graham", lastName: "Greene" },
      ],
    },
    {
      name: "Information Technology",
      employees: [],
    },
  ]);

  function handleAddEmployee(
    firstName: string,
    lastName: string,
    departmentName: string,
  ) {
    const newDepartments = departments.map(function (dept) {
      if (dept.name !== departmentName) return dept;

      const newEmployee = { firstName, lastName }; // You may want to update this if lastName is needed
      return {
        name: dept.name,
        employees: [...dept.employees, newEmployee],
      };
    });

    setDepartments(newDepartments);
  }

  return (
    <div>
      <main>
        <div className="employees-page">
          <h2>Employees</h2>
          <p className="page-description">
            View all company employees and their positions.
          </p>
          {/* You can reuse the PersonList component here with your employee data */}
          <div className="employee-list">
            {departments.map(function (dept, index) {
              return <DepartmentSection key={dept.name} department={dept} />;
            })}

            <AddEmployeeForm
              departments={departments.map((dept) => dept.name)}
              onAddEmployee={handleAddEmployee}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default EmployeesPage;
