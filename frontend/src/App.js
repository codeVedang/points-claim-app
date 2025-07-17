// src/App.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import UserSelector from "./components/UserSelector";
import ClaimButton from "./components/ClaimButton";
import Leaderboard from "./components/Leaderboard";

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  // Load users on first render
  useEffect(() => {
    axios.get("http://localhost:5000/api/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  // Add a new user
  const addUser = async (newUser) => {
    if (newUser.trim() === "") return;
    await axios.post("http://localhost:5000/api/users", { name: newUser });
    const res = await axios.get("http://localhost:5000/api/users");
    setUsers(res.data);
  };

  // Claim random points for selected user
  const claimPoints = async () => {
    if (!selectedUser) return alert("Please select a user first!");
    await axios.post(`http://localhost:5000/api/claim/${selectedUser}`);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>🏆 Points Claim App</h1>
      <UserSelector
        users={users}
        selectedUser={selectedUser}
        onSelect={setSelectedUser}
        onAdd={addUser}
      />
      <ClaimButton onClick={claimPoints} />
      <Leaderboard />
    </div>
  );
};

export default App;
