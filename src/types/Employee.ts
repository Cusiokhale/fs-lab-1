export type Employee = {
  firstName: string;
  lastName: string;
};

export type Department = {
  name: string;
  employees: Employee[];
};

export interface Role {
  title: string;
  employee: {
    firstname: string;
    lastname: string;
  };
}