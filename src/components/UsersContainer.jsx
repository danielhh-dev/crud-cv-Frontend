import User from "./User";

const UsersContainer = ({ data, setUserToEdit, deleteUser }) => {
  return (
    <>
      <div className="logo"></div>
      <h1>Users</h1>
      <h2>Manage your users here</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="5">Sin datos</td>
            </tr>
          ) : (
            data.map((user) => (
              <User
                key={user.id}
                user={user}
                setUserToEdit={setUserToEdit}
                deleteUser={deleteUser}
              />
            ))
          )}
        </tbody>
      </table>
    </>
  );
};

export default UsersContainer;
