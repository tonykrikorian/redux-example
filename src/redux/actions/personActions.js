import * as types from "./constantTypes";

export const addPerson = person => {
  return { type: types.ADD_PERSON, person };
};
