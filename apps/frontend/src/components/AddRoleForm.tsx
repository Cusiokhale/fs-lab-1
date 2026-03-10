import { useRoleForm } from "../hooks/useRoleForm";

type Props = {
  onRoleAdded: () => void;
};

export default function AddRoleForm({ onRoleAdded }: Props) {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    roleTitle,
    setRoleTitle,
    errors,
    submit,
  } = useRoleForm();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = submit();
    if (result.ok) onRoleAdded();
  }

  return (
    <section className="add-employee-form">
      <h3>Add Role</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            First Name
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="e.g. John"
            />
          </label>

          <label>
            Last Name
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="e.g. Smith"
            />
          </label>

          <label>
            Role
            <input
              value={roleTitle}
              onChange={(e) => setRoleTitle(e.target.value)}
              placeholder="e.g. Director of IT"
            />
          </label>

          <button type="submit">Add</button>
        </div>

        {errors.firstName && (
          <p style={{ color: "crimson", marginTop: "8px" }}>
            {errors.firstName}
          </p>
        )}

        {errors.roleTitle && (
          <p style={{ color: "crimson", marginTop: "8px" }}>
            {errors.roleTitle}
          </p>
        )}
      </form>
    </section>
  );
}