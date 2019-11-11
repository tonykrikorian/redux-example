import * as types from "../actions/constantTypes";

export default function personReducer(state = [], action) {
  switch (action.type) {
    case types.ADD_PERSON:
      console.log(state);
      return [...state, { ...action.person }];
    case types.DELETE_PERSON:
      return [...state].filter(x => x.email !== action.person.email);
    default:
      return state;
  }
}
