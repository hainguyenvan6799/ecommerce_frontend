import React from "react";

const Notification = ({ message }) => {
  return (
    <div>
      <p style={{ color: "red" }}>{message}</p>
    </div>
  );
};

export default Notification;
