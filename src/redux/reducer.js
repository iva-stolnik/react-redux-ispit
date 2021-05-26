import { RESET, SET_NAME, SET_REPOSITORY } from "./actions";

const initialState = { user: null, repository: null };

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_NAME:
      return { ...state, user: action.payload };
    case SET_REPOSITORY:
      return { ...state, repository: action.payload };
    case RESET:
      return initialState;
    default:
      return state;
  }
}
