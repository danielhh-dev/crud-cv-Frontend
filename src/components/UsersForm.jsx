import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  username: "",
};

//This form will be used to add users and update users
const UsersForm = () => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {};

  const handleSubmit = (e) => {};
  
  const handleReset = (e) => {};

  return (
    <div>
      <h3>Add new user</h3>
      <p>Add new user and assign role</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={form.email}
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={form.username}
        />
        <input type="submit" value="Save User" />
        <input type="reset" value="Back" onClick={handleReset} />
      </form>
    </div>
  );
};

export default UsersForm;
