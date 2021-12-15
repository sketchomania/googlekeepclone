export default (labels = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_LABELS":
      return action.payload;
    case "CREATE_LABEL":
      return [...labels, action.payload];
    default:
      return labels;
  }
};
