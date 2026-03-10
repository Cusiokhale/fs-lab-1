type RoleRecord = {
  title: string;
  employee: {
    firstname: string;
    lastname: string;
  };
};

const roles: RoleRecord[] = [
  {
    title: "CEO/Chair of Board",
    employee: { firstname: "Jo-Anne", lastname: "Sinclair" },
  },
  {
    title: "COO/VP Operations",
    employee: { firstname: "Jackson", lastname: "Smith" },
  },
  {
    title: "CFO/VP Administration",
    employee: { firstname: "Susan", lastname: "Thomas" },
  },
  {
    title: "VP Client Services",
    employee: { firstname: "Richa", lastname: "Kaur" },
  },
  {
    title: "CIO",
    employee: { firstname: "Josee", lastname: "Benjamin" },
  },
];

export const organizationRepository = {
  getRoles() {
    return roles;
  },
};