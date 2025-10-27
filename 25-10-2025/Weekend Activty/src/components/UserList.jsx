import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="container mt-4">
      <h3>User List</h3>
      <ul className="list-group mt-3">
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => setSelected(user)}
            className="list-group-item list-group-item-action"
            style={{ cursor: "pointer" }}
          >
            {user.name}
          </li>
        ))}
      </ul>
      {selected && (
        <div className="card mt-3">
          <div className="card-body">
            <h5>{selected.name}</h5>
            <p>Email: {selected.email}</p>
            <p>Phone: {selected.phone}</p>
            <p>Website: {selected.website}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
