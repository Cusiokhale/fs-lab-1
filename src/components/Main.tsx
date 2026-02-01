type MainProps = {
  departments: any[];
};

export default function Main({ departments }: MainProps) {
  return (
    <main>
      <h2>Departments</h2>

      {departments.map((dept, index) => (
        <section key={index}>
          <h3>{dept.name}</h3>
          <ul>
            {dept.employees.length === 0 ? (
              <li>No employees listed</li>
            ) : (
              dept.employees.map((emp: any, empIndex: number) => (
                <li key={empIndex}>
                  {emp.firstName} {emp.lastName}
                </li>
              ))
            )}
          </ul>
        </section>
      ))}
    </main>
  );
}
