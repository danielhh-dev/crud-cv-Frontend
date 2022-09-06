import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  username: "",
};

//This form will be used to add users and update users
const UsersForm = ({createUser, updateUser, userToEdit, setUserToEdit}) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!form.name || !form.email){
      alert("Datos incompletos");
      return;
    }

    if(id === null){
      createUser(form);
    }else{
      updateUser(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setUserToEdit(null);
  };

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
