"use client";
import { useState, useEffect } from "react";

export default function UsersPage() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, age };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setName("");
    setAge("");
  };

  return (
    <div className="user-page">
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ad"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Yaş"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <button
          style={{
            padding: "10px 20px",
            marginTop: "10px",
            backgroundColor: "gray",
            color: "white",

            marginLeft: "10px",
          }}
          type="submit"
        >
          Add
        </button>
      </form>

      <h2>Users</h2>
      <ul className="user-list">
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
}
