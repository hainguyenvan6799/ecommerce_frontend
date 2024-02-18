import React, { useState } from "react";

function Togglable({ children }) {
  const [showWhenVisible, setShowWhenVisible] = useState({ display: "none" });

  const changeVisible = () => {
    setShowWhenVisible({ display: "block" });
  };

  const closeVisible = () => {
    setShowWhenVisible({ display: "none" });
  };

  return (
    <div className="togglableContent" style={showWhenVisible}>
      {children}
      <button onClick={changeVisible}>Set Visible</button>
      <button onClick={closeVisible}>Close Button</button>
    </div>
  );
}

export default Togglable;
