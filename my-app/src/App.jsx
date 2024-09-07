import { useEffect, useState } from 'react';
import UserData from './components/UserData';
import './App.css';

const Api = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.length > 0) setUsers(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchUsers(Api);
  }, []);

  return (
    <>
      <h1>Dynamic table using fetch</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <UserData users={users} />
        </tbody>
      </table>
    </>
  );
};

export default App;
