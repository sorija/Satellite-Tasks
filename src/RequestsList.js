import React from "react";
import Request from "./Request.js";
import { connect } from "react-redux";
import { setCurrentPage } from "./actions/paginationActions.js";

class RequestsList extends React.Component {
  divideRequests = () => {
    let startIndex = (this.props.currentPage - 1) * 5;
    let endIndex = this.props.currentPage * 5;
    return this.props.requests.slice(startIndex, endIndex);
  };

  render() {
    const { currentPage, requests, setCurrentPage } = this.props;
    // number of pages is equal to number of requests divided by limit of requests per page and rounded up
    const length = requests.length / 5;
    const pagination = Array.from(
      { length: Math.ceil(length) },
      (_, i) => i + 1
    );
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
          <div>
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(1)}
            >
              &laquo;
            </button>
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              &lt;
            </button>
            {pagination.map(page => (
              <button
                key={page}
                type="button"
                disabled={currentPage === page}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            <button
              type="button"
              disabled={currentPage === pagination.length}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              &gt;
            </button>
            <button
              type="button"
              disabled={currentPage === pagination.length}
              onClick={() => setCurrentPage(pagination.length)}
            >
              &raquo;
            </button>
          </div>
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

const mapDispatchtoProps = dispatch => ({
  setCurrentPage: page => dispatch(setCurrentPage(page))
});

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(RequestsList);
