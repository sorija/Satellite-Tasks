import React from "react";

const Request = ({ id, satName, start, end, status }) => (
  <React.Fragment>
    <ul>
      <p>{id}</p>
      <p>{satName}</p>
      <p>{start}</p>
      <p>{end}</p>
      <p>{status}</p>
    </ul>
  </React.Fragment>
);
export default Request;
