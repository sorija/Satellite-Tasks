const getDividedRequests = (requests, currentPage) => {
  let startIndex = (currentPage - 1) * 5;
  let endIndex = currentPage * 5;
  return requests.slice(startIndex, endIndex);
};

export default getDividedRequests;
