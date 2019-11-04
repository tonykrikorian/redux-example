import * as types from "../actions/constantTypes";

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state, { ...action.course }];
    case types.DELETE_COURSE:
      console.log(action);
      return [...state].filter(course => course.title != action.course.title);
    default:
      return state;
  }
}
