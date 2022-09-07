import UsersForm from "./components/UsersForm";
import UsersContainer from "./components/UsersContainer";
import { useState } from "react";

const initialDB = [
  {
    id: 5,
    name: "John Doe",
    email: "john@gmail.com",
    username: "john",
  },
  {
    id: 3,
    name: "John Doe",
    email: "john@gmail.com",
    username: "john",
  },
  {
    id: 1,
    name: "Fanny",
    email: "fanny@gmail.com",
    username: "gatita",
  },
];

const App = () => {
  const [DB, setDB] = useState(initialDB);
  const [userToEdit, setUserToEdit] = useState(null);

  const createUser = (user) => {
    user.id = Date.now();
    console.log(user);
    setDB([...DB, user])
  };

  const updateUser = (data) => {
    let newData = DB.map(user => user.id === data.id ? data : user);
    setDB(newData);
  };

  const deleteUser = (id) => {
    let isDelete = window.confirm(
      `Are you sure you want to delete this user?`
    );

    if(isDelete){
      let newData = DB.filter(user => user.id !== id);
      setDB(newData);
    }else {
      return;
    }
  };

  return (
    <div className="CRUD-">
      <UsersForm
        createUser={createUser}
        updateUser={updateUser}
        userToEdit={userToEdit}
        setUserToEdit={setUserToEdit}
      />
      <UsersContainer
        data={DB}
        deleteUser={deleteUser}
        setUserToEdit={setUserToEdit}
      />
    </div>
  );
};

export default App;
