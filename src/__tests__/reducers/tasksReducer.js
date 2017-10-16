import reducer from "../../reducers/tasksReducer";
import * as types from "../../actions/types";

describe("Tasks reducer", function() {
  it("has a default state", () => {
    expect(reducer(null, { type: "some_type" })).toEqual(null);
  });

  it("can handle 'FETCH_TASKS_SUCCESS'", () => {
    expect(
      reducer(null, {
        type: types.FETCH_TASKS_SUCCESS,
        payload: { tasks: null }
      })
    ).toEqual(null);
  });

  it("can handle 'SAVE_TASKS_SUCCESS'", () => {
    expect(
      reducer(null, {
        type: types.SAVE_TASKS_SUCCESS,
        payload: { tasks: null }
      })
    ).toEqual(null);
  });

  it("can handle 'UPDATE_TASK'", () => {
    expect(
      reducer(null, {
        type: types.UPDATE_TASK,
        payload: {}
      })
    ).toEqual({});
  });
});
