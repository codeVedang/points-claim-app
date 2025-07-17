// src/components/UserSelector.jsx

// BONUS: UserSelector component allows user selection from dropdown and adding new users.
// Controlled input and select elements for dynamic interaction.
// Properly lifts selectedUser and newUserName state up via props.

import React, { useState } from "react";
import "./UserSelector.css";

const UserSelector = ({ users, selectedUser, onSelect, onAdd }) => {
  const [newUserName, setNewUserName] = useState("");

  return (
    <div className="user-selector">
      {/* User dropdown list */}
      <select
        className="dropdown"
        value={selectedUser}
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value="">Select a user</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>

      {/* Input field for new user */}
      <input
        type="text"
        className="input"
        placeholder="Add user"
        value={newUserName}
        onChange={(e) => setNewUserName(e.target.value)}
      />

      {/* Add button triggers new user creation */}
      <button
        className="add-btn"
        onClick={() => {
          onAdd(newUserName);
          setNewUserName("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default UserSelector;

