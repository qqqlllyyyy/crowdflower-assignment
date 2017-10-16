import * as TYPES from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case TYPES.FETCH_TASKS_SUCCESS:
      return action.payload.tasks;
    case TYPES.FETCH_TASKS_FAIL:
      return null;
    case TYPES.SAVE_TASKS_SUCCESS:
      return action.payload.tasks;
    case TYPES.SAVE_TASKS_FAIL:
      return action.payload.tasks;
    case TYPES.UPDATE_TASK:
      return action.payload;
    default:
      return state;
  }
}
