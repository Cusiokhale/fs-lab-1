export type Employee = {
  firstName: string;
  lastName: string;
};

export type Department = {
  name: string;
  employees: Employee[];
};
