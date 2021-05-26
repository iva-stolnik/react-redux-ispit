import { fetchUser, fetchRepository } from "../services/gitAPI";

export const RESET = "RESET";
export const SET_NAME = "SET_NAME";
export const SET_REPOSITORY = "SET_REPOSITORY";

export function user(user) {
  return (dispatch) =>
    fetchUser(user).then((data) => {
      if (data.length === 0) throw new Error("User doesn't exist!");
      console.log(data);
      dispatch({
        type: SET_NAME,
        payload: data,
      });
    });
}

export function repository(userRepository) {
  return (dispatch) =>
    fetchRepository(userRepository).then((data) => {
      if (data.length === 0) throw new Error("Repository is empty");
      console.log(data);
      dispatch({
        type: SET_REPOSITORY,
        payload: data,
      });
    });
}

export function reset() {
  return { type: RESET };
}
