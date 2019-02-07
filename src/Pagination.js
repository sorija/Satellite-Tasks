import React from "react";
import { connect } from "react-redux";
import { setCurrentPage } from "./actions/paginationActions.js";

class Pagination extends React.Component {
  render() {
    const { currentPage, setCurrentPage } = this.props;
    // number of pages is equal to number of tasks divided by limit of tasks per page and rounded up
    const length = this.props.requests.length / 5;
    const pagination = Array.from(
      { length: Math.ceil(length) },
      (_, i) => i + 1
    );
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    requests: state.requests,
    currentPage: state.currentPage
  };
};

const mapDispatchToProps = dispatch => ({
  setCurrentPage: page => dispatch(setCurrentPage(page))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
