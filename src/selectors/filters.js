const getFilteredRequests = (requests, { text, status }) => {
  return requests.filter(request => {
    const textMatch = request.satName
      .toLowerCase()
      .includes(text.toLowerCase());
    switch (status) {
      case "all":
        return textMatch;
      case "new":
        return textMatch && !request.done;
      case "done":
        return textMatch && request.done;
      default:
        throw TypeError("Invalid status");
    }
  });
};

export default getFilteredRequests;
