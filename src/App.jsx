import UsersForm from "./components/UsersForm";
import UsersContainer from "./components/UsersContainer";
import { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";


const App = () => {
  const [DB, setDB] = useState([]);
  const [userToEdit, setUserToEdit] = useState(null);
  
  const getUsers = async() => {
    const URL = '';
    const result = await axios.get(URL);
    setDB(result);
  }
  
  useEffect(()=>{
    getUsers();
  });

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
