const initialState = [];

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_PEOPLE":
    console.log('in peopleReducer');
      return payload.results;
    default:
      return initialState;
  }
};
