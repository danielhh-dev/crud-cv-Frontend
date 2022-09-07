function User({user, setUserToEdit, deleteUser}) {
  let {id, name, email, username} = user;

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{username}</td>
      <td>
        <button>Show</button>
        <button onClick={()=> setUserToEdit(user)} >Edit</button>
        <button onClick={()=> deleteUser(id)} >Delete</button>
      </td>
    </tr>
  );
}

export default User;
