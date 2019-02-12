import React from "react";
import { connect } from "react-redux";
import AddRequestForm from "./AddRequestForm.js";
import { addRequest } from "../actions/requests.js";

export class AddNewRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = { addNew: false };
  }
  handleAddClick = () => {
    this.setState({ addNew: !this.state.addNew });
  };
  onSubmit = ({ satName, longitude, latitude }) => {
    this.props.addRequest(satName, parseFloat(longitude), parseFloat(latitude));
    this.setState({ addNew: false });
  };
  render() {
    let addRequestForm;
    if (this.state.addNew) {
      addRequestForm = <AddRequestForm onSubmit={this.onSubmit} />;
    }
    return (
      <div className="add-request-container">
        <button className="add-request__btn" onClick={this.handleAddClick}>
          NEW REQUEST
        </button>
        {addRequestForm}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addRequest: (satName, longitude, latitude) =>
    dispatch(addRequest(satName, longitude, latitude))
});

export default connect(
  null,
  mapDispatchToProps
)(AddNewRequest);
