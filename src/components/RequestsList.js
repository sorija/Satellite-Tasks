import React from "react";
import Request from "./Request.js";
import { connect } from "react-redux";
import Pagination from "./Pagination.js";
import { toggleDone } from "../actions/requests.js";
import getFilteredRequests from "../selectors/requests.js";

class RequestsList extends React.Component {
  divideRequests = () => {
    let startIndex = (this.props.currentPage - 1) * 5;
    let endIndex = this.props.currentPage * 5;
    return this.props.requests.slice(startIndex, endIndex);
  };
  onChange = e => {
    let id = Number(e.target.value);
    this.props.toggleDone(id);
  };
  render() {
    return (
      <div>
        <ul>
          {this.divideRequests().map(request => (
            <li key={request.id}>
              <Request {...request} onChange={this.onChange} />
            </li>
          ))}
        </ul>
        <footer>
          <Pagination />
        </footer>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    requests: getFilteredRequests(state.requests, state.filters),
    currentPage: state.currentPage
  };
};

const mapDispatchToProps = dispatch => ({
  toggleDone: id => dispatch(toggleDone(id)),
  getFilteredRequests: (requests, filters) =>
    dispatch(getFilteredRequests(requests, filters))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestsList);
