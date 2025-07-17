// src/components/ClaimButton.jsx

// BONUS: ClaimButton component for claiming random points.
// Styled and reusable. Triggers claim handler from parent via props.

import React from "react";
import "./ClaimButton.css";

const ClaimButton = ({ onClick }) => {
  return (
    <button className="claim-btn" onClick={onClick}>
      🎯 Claim Points
    </button>
  );
};

export default ClaimButton;
