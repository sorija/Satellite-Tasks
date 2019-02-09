import React from "react";

export class AddRequestForm extends React.Component {
  // using local state to track changes without modifying data before submitting
  constructor(props) {
    super(props);
    this.state = {
      satName: "",
      longitude: "",
      latitude: ""
    };
  }
  validateNumImput = num => {
    return !num || num.match(/^\d+(\.\d*)?$/);
  };
  onNameChange = e => {
    // store the e.target.value in a variable or event will be nullified before the .setState() fires
    const satName = e.target.value;
    this.setState(() => ({ satName }));
  };
  onLongitudeChange = e => {
    const longitude = e.target.value;
    if (this.validateNumImput(longitude)) {
      this.setState(() => ({ longitude }));
    }
  };
  onLatitudeChange = e => {
    const latitude = e.target.value;
    if (this.validateNumImput(latitude)) {
      this.setState(() => ({ latitude }));
    }
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({
      satName: this.state.satName,
      longitude: this.state.longitude,
      latitude: this.state.latitude
    });
  };
  render() {
    const { satName, longitude, latitude } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Satellite's Name"
          value={satName}
          onChange={this.onNameChange}
          autoFocus
        />
        <input
          type="text"
          placeholder="Longitude"
          value={longitude}
          onChange={this.onLongitudeChange}
        />
        <input
          type="text"
          placeholder="Latitude"
          value={latitude}
          onChange={this.onLatitudeChange}
        />
        <input
          disabled={!satName || !longitude || !latitude}
          type="submit"
          value="Submit"
        />
      </form>
    );
  }
}

export default AddRequestForm;
