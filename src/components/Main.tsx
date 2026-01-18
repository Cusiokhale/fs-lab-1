import type { Department } from "../types/Employee";
import DepartmentSection from "./DepartmentSection";

export default function Main() {

  const departments: Department[] = [
  {
    name: "Business Analyst, Online Banking",
    employees: [
      { firstName: "Linda", lastName: "Analyst" }
    ]
  },
  {
    name: "Contract Management",
    employees: [
      { firstName: "Esra", lastName: "Sedge" }
    ]
  },
  {
    name: "Compliance Management",
    employees: [
      { firstName: "Pranee", lastName: "Tan" }
    ]
  },
  {
    name: "IT End User Service Desk",
    employees: [
      { firstName: "Karmen", lastName: "Spruce" }
    ]
  },
  {
    name: "IT End User Computing",
    employees: [
      { firstName: "Haydar", lastName: "Katirci" }
    ]
  },
  {
    name: "IT Telecom and Infrastructure",
    employees: [
      { firstName: "Jill", lastName: "Harkness" }
    ]
  },
  {
    name: "Data Center and Hosting Services",
    employees: [
      { firstName: "Tim", lastName: "Morrison" }
    ]
  },
  {
    name: "IT Risk Management",
    employees: [
      { firstName: "Aleksandr", lastName: "Milosevic" }
    ]
  },
  {
    name: "IT Project Management Office",
    employees: [
      { firstName: "Jim", lastName: "Wingnut" }
    ]
  },
  {
    name: "Administration",
    employees: [
      { firstName: "Zoë", lastName: "Robins" },
      { firstName: "Madeleine", lastName: "Madden" }
    ]
  },
  {
    name: "Audit",
    employees: [
      { firstName: "Josha", lastName: "Sadowski" },
      { firstName: "Kate", lastName: "Fleetwood" }
    ]
  },
  {
    name: "Banking Operations",
    employees: [
      { firstName: "Priyanka", lastName: "Bose" },
      { firstName: "Hammed", lastName: "Animashaun" },
      { firstName: "Álvaro", lastName: "Morte" },
      { firstName: "Taylor", lastName: "Napier" },
      { firstName: "Alan", lastName: "Simmonds" },
      { firstName: "Gil", lastName: "Cardinal" }
    ]
  },
  {
    name: "Communications",
    employees: [
      { firstName: "Richard", lastName: "J. Lewis" },
      { firstName: "Randy", lastName: "Bradshaw" }
    ]
  },
  {
    name: "Corporate Services",
    employees: [
      { firstName: "Tracey", lastName: "Cook" },
      { firstName: "Lubomir", lastName: "Mykytiuk" },
      { firstName: "Dakota", lastName: "House" }
    ]
  },
  {
    name: "Facilities",
    employees: [
      { firstName: "Lori", lastName: "Lea Okemah" },
      { firstName: "Renae", lastName: "Morrisseau" },
      { firstName: "Rick", lastName: "Belcourt" },
      { firstName: "Selina", lastName: "Hanusa" }
    ]
  },
  {
    name: "Financial Services",
    employees: [
      { firstName: "Buffy", lastName: "Gaudry" },
      { firstName: "Shaneen", lastName: "Ann Fox" },
      { firstName: "Allan", lastName: "Little" },
      { firstName: "Danny", lastName: "Rabbit" },
      { firstName: "Jesse", lastName: "Ed Azure" }
    ]
  },
  {
    name: "Human Resources",
    employees: [
      { firstName: "Stacy", lastName: "Da Silva" },
      { firstName: "Vladimír", lastName: "Valenta" },
      { firstName: "Samone", lastName: "Sayeses-Whitney" },
      { firstName: "Paul", lastName: "Coeur" },
      { firstName: "Graham", lastName: "Greene" }
    ]
  },
  {
    name: "Information Technology",
    employees: []
  }
];

  return (
    <main>
      <section>
        <h2>Employees</h2>
        <p>Employee list will be displayed here.</p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Departments</h2>

          {departments.map((dept) => (
            <DepartmentSection key={dept.name} department={dept} />
          ))}
      </section>
    </main>
  );
}
