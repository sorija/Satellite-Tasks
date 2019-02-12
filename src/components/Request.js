import React from "react";

const Request = ({ id, satName, longitude, latitude, done, onChange }) => (
  <div className="request-container">
    <div className="name-and-id">
      <p className="request-id data">
        ID: <span className="data-span">{id}</span>
      </p>
      <p className="sat-name">{satName}</p>
    </div>
    <div className="coordinates">
      <p className="lat data">
        Latitude: <span className="data-span">{latitude}</span>
      </p>
      <p className="lon data">
        Longitude: <span className="data-span">{longitude}</span>
      </p>
    </div>
    <input
      className="request-status data"
      type="checkbox"
      value={id}
      checked={done}
      onChange={onChange}
    />
  </div>
);

export default Request;
