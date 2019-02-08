const getFilteredRequests = (requests, { text }) => {
  return requests.filter(request => {
    const textMatch = request.satName
      .toLowerCase()
      .includes(text.toLowerCase());
    return textMatch;
  });
};

export default getFilteredRequests;
