import * as actions from "../../actions/index";
import * as types from "../../actions/types";

describe("Action creators", function() {
  it("add a new task", () => {
    expect(actions.addTask([]).payload.length).toEqual(1);
  });
});
