import * as TYPES from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case TYPES.FETCH_TASKS_SUCCESS:
      // console.log(action);
      return action.payload.tasks;
    // return [
    //   {
    //     _id: 1,
    //     title: "Test01",
    //     content: "Lorem ipsum dolor sit amet",
    //     timeUpdated: "2017-05-20"
    //   },
    //   {
    //     _id: 2,
    //     title: "Test02",
    //     content: "Lorem 222 ipsum dolor sit amet",
    //     timeUpdated: "2017-05-21"
    //   }
    // ];
    case TYPES.FETCH_TASKS_FAIL:
      return null;
    case TYPES.SAVE_TASKS_SUCCESS:
      return action.payload.tasks;
    case TYPES.SAVE_TASKS_FAIL:
      return action.payload.tasks;
    case TYPES.ADD_TASK:
      return action.payload;
    case TYPES.REMOVE_TASK:
      return action.payload;
    case TYPES.DRAG_TASK:
      return action.payload;
    case TYPES.UPDATE_TASK:
      console.log(action.payload);
      return action.payload;
    // return [
    //   {
    //     _id: 1,
    //     title: "Test01",
    //     content: "Lorem ipsum dolor sit amet",
    //     hidden: false,
    //     timeUpdated: "2017-05-20"
    //   },
    //   {
    //     _id: 2,
    //     title: "Test02",
    //     content: "Lorem 222 ipsum dolor sit amet",
    //     hidden: true,
    //     timeUpdated: "2017-05-21"
    //   }
    // ];
    default:
      return state;
  }
}
