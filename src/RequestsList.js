import React from "react";
import Request from "./Request.js";

class RequestsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
  }
  handlePageChange(pageNum) {
    return () => this.setState({ currentPage: pageNum });
  }
  divideRequests = () => {
    let startIndex = (this.state.currentPage - 1) * 5;
    let endIndex = this.state.currentPage * 5;
    return this.props.requests.slice(startIndex, endIndex);
  };

  render() {
    const { currentPage } = this.state;
    // number of pages is equal to number of requests divided by limit of requests per page and rounded up
    const length = this.props.requests.length / 5;
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
              onClick={this.handlePageChange(1)}
            >
              &laquo;
            </button>
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={this.handlePageChange(currentPage - 1)}
            >
              &lt;
            </button>
            {pagination.map(page => (
              <button
                key={page}
                type="button"
                disabled={page === currentPage}
                onClick={this.handlePageChange(page)}
              >
                {page}
              </button>
            ))}
            <button
              type="button"
              disabled={currentPage === pagination.length}
              onClick={this.handlePageChange(currentPage + 1)}
            >
              &gt;
            </button>
            <button
              type="button"
              disabled={currentPage === pagination.length}
              onClick={this.handlePageChange(pagination.length)}
            >
              &raquo;
            </button>
          </div>
        </footer>
      </div>
    );
  }
}
export default RequestsList;
