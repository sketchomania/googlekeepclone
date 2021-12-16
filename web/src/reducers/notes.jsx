export default (notes = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_NOTES":
      return action.payload;
    case "CREATE_NOTE":
      return [...notes, action.payload];
    case "UPDATE_NOTE":
      return notes.map((note) =>
        note._id === action.payload._id ? action.payload : note
      );
    default:
      return notes;
  }
};
