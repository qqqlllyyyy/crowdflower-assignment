import * as TYPES from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case TYPES.FETCH_TASKS_SUCCESS:
      return null;
    case TYPES.FETCH_TASKS_FAIL:
      console.log(action.payload);
      return action.payload;
    case TYPES.SAVE_TASKS_SUCCESS:
      return null;
    case TYPES.SAVE_TASKS_FAIL:
      return action.payload.errors;
    case TYPES.ADD_TASK:
      return null;
    case TYPES.REMOVE_TASK:
      return null;
    case TYPES.DRAG_TASK:
      return null;
    default:
      return state;
  }
}
