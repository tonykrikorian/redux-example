import * as types from "./constantTypes";

export const createCourse = course => {
  return { type: types.CREATE_COURSE, course };
};

export const deleteCourse = course => {
  return { type: types.DELETE_COURSE, course };
};
