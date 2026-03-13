export async function getRoles() {
  const response = await fetch("http://localhost:3001/organization/roles");
  const data = await response.json();
  return data;
}