import UsersForm from "./components/UsersForm"
import UsersContainer from "./components/UsersContainer"
import { useState } from "react"

const initialDB = [
  {
    id: 5,
    name: 'John Doe',
    email: 'john@gmail.com',
    username: 'john'
  },
  {
    id: 3,
    name: 'John Doe',
    email: 'john@gmail.com',
    username: 'john'
  },
  {
    id: 1,
    name: 'Fanny',
    email: 'fanny@gmail.com',
    username: 'gatita'
  }
]

const App = () => {
  const [DB, setDB] = useState(initialDB)

  return (
    <div className="CRUD-">
      <UsersForm/>
      <UsersContainer data={initialDB} />
    </div>
  )
}

export default App