import React from "react";
import Request from "./Request.js";
import { connect } from "react-redux";
import Pagination from "./Pagination.js";

class RequestsList extends React.Component {
  divideRequests = () => {
    let startIndex = (this.props.currentPage - 1) * 5;
    let endIndex = this.props.currentPage * 5;
    return this.props.requests.slice(startIndex, endIndex);
  };

  render() {
    return (
      <div>
        <ul>
          {this.divideRequests().map(request => (
            <li key={request.id}>
              <Request {...request} />
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
    requests: state.requests,
    currentPage: state.currentPage
  };
};

export default connect(mapStateToProps)(RequestsList);