const getError = (err) =>
  err.response && err.response.data && err.response.dada.message
    ? err.response.data.message
    : err.message;

export { getError };
