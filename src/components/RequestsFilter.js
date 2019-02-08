import React from "react";
import { connect } from "react-redux";
import { setTextFilter, setStatusFilter } from "../actions/filters.js";

class RequestsFilter extends React.Component {
  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
  };
  onStatusChange = e => {
    this.props.setStatusFilter(e.target.value);
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search By Satellite..."
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <label htmlFor="status">Show: </label>
        <select id="status" onChange={this.onStatusChange}>
          <option value="all">All</option>
          <option value="new">New</option>
          <option value="done">Done</option>
        </select>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  setStatusFilter: status => dispatch(setStatusFilter(status))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestsFilter);
