import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/user").then((res) => setUsers(res.data));
  }, []);

  const addUser = async () => {
    const res = await axios.post("http://localhost:5000/api/user", { name, email });
    setUsers([...users, res.data]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
      <h3>Add User</h3>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <button onClick={addUser}>Add</button>
    </div>
  );
}

export default App;
