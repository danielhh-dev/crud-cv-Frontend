function User({user}) {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.username}</td>
      <td>
        <button>Show</button>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  );
}

export default User;
