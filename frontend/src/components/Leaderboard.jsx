// src/components/Leaderboard.jsx

// BONUS: Leaderboard component with real-time podium and ranking table.
// Fetches data from backend every 3 seconds and splits users into top 3 and others.
// Top 3 are displayed in a styled podium layout, others in a table below.

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Leaderboard.css";

// Use environment variable for API base (works on localhost and Vercel)
const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:5000";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  // Fetch leaderboard data from backend on component mount and every 3 seconds
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_BASE}/api/leaderboard`);
        setLeaderboard(res.data);
      } catch (err) {
        console.error("Failed to fetch leaderboard:", err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 3000); // real-time updates
    return () => clearInterval(interval); // clear interval on unmount
  }, []);

  // Separate top 3 users and rest
  const topThree = leaderboard.slice(0, 3);
  const rest = leaderboard.slice(3);

  return (
    <div className="leaderboard-container">
      <h2>Leaderboard</h2>

      {/* Podium Section */}
      <div className="podium">
        {topThree.map((user, index) => (
          <div key={user._id} className={`podium-user place-${index + 1}`}>
            <div className="podium-rank">
              {index === 0 ? "👑" : index === 1 ? "🥈" : "🥉"}
            </div>
            <div className="podium-name">{user.name}</div>
            <div className="podium-points">{user.totalPoints} pts</div>
          </div>
        ))}
      </div>

      {/* Table Section for ranks 4 and below */}
      <table className="rest-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Total Points</th>
          </tr>
        </thead>
        <tbody>
          {rest.length === 0 ? (
            <tr>
              <td colSpan="3">No users beyond Top 3 yet.</td>
            </tr>
          ) : (
            rest.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 4}</td>
                <td>{user.name}</td>
                <td>{user.totalPoints}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
