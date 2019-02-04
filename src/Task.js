import React from "react";

const Task = ({ id, satName, start, end, status }) => (
  <React.Fragment>
    <ul>
      <li>{id}</li>
      <li>{satName}</li>
      <li>{start}</li>
      <li>{end}</li>
      <li>{status}</li>
    </ul>
  </React.Fragment>
);
export default Task;
