import * as types from "../actions/constantTypes";

export default function personReducer(state = [], action) {
  switch (action.type) {
    case types.ADD_PERSON:
      console.log(state);
      return {};
    default:
      return state;
  }
}
