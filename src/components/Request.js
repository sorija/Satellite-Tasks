import React from "react";

const Request = ({ id, satName, longitude, latitude, done, onChange }) => (
  <div>
    <span>{id}</span>
    <p>
      Name: <span>{satName}</span>
    </p>
    <div>
      <span>{longitude}</span>
      <span>{latitude}</span>
    </div>
    <input type="checkbox" value={id} checked={done} onChange={onChange} />
  </div>
);

export default Request;
