// src/App.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import UserSelector from "./components/UserSelector";
import ClaimButton from "./components/ClaimButton";
import Leaderboard from "./components/Leaderboard";

//  Dynamic API base URL based on environment
const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:5000";

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  // Load users on first render
  useEffect(() => {
    axios.get(`${API_BASE}/api/users`).then((res) => {
      setUsers(res.data);
    });
  }, []);

  // Add a new user
  const addUser = async (newUser) => {
    if (newUser.trim() === "") return;
    await axios.post(`${API_BASE}/api/users`, { name: newUser });
    const res = await axios.get(`${API_BASE}/api/users`);
    setUsers(res.data);
  };

  // Claim random points for selected user
  const claimPoints = async () => {
    if (!selectedUser) return alert("Please select a user first!");
    await axios.post(`${API_BASE}/api/claim/${selectedUser}`);
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
