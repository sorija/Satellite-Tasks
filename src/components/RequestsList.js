import React from "react";
import Request from "./Request.js";
import { connect } from "react-redux";
import Pagination from "./Pagination.js";
import { toggleDone } from "../actions/requests.js";
import getFilteredRequests from "../selectors/filters.js";
import getDividedRequests from "../selectors/requests.js";

class RequestsList extends React.Component {
  onChange = e => {
    this.props.toggleDone(Number(e.target.value));
  };
  render() {
    return (
      <div>
        <ul>
          {this.props.requests.map(request => (
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
    // give component access to already filtered and paginated requests
    requests: getDividedRequests(
      getFilteredRequests(state.requests, state.filters),
      state.currentPage
    ),
    currentPage: state.currentPage
  };
};

const mapDispatchToProps = dispatch => ({
  toggleDone: id => dispatch(toggleDone(id)),
  getFilteredRequests: (requests, filters) =>
    dispatch(getFilteredRequests(requests, filters)),
  getDividedRequests: (requests, currentPage) =>
    dispatch(getDividedRequests(requests, currentPage))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestsList);
