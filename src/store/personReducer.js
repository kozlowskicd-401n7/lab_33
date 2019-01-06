const initialState = {};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_PERSON":
      console.log("in personReducer");
      return payload;
    default:
      return initialState;
  }
};
