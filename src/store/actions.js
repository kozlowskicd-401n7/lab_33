import * as utils from "../lib/utils";

let api = "https://swapi.co/api/people/";

export const getPeople = () => dispatch => {
  console.log("in getPeople action");
  return utils.get(api).then(results => {
    console.log("returning results to dispatch");
    dispatch(returnPeople(results));
  });
};

export const getPerson = url => dispatch => {
  console.log("in getPerson action");
  return utils.get(url).then(results => {
    console.log("returning results to dispatch");
    dispatch(returnPerson(results));
  });
};

const returnPeople = payload => {
  console.log("in returnPeople");
  return {
    type: "GET_PEOPLE",
    payload: payload
  };
};

const returnPerson = payload => {
  console.log("in returnPerson", payload);
  return {
    type: "GET_PERSON",
    payload: payload
  };
};
