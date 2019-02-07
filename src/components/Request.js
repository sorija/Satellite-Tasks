import React from "react";

const Request = ({ id, satName, longitude, latitude, status }) => (
  <React.Fragment>
    <ul>
      <p>{id}</p>
      <p>{satName}</p>
      <p>{longitude}</p>
      <p>{latitude}</p>
      <p>{status}</p>
    </ul>
  </React.Fragment>
);

export default Request;
