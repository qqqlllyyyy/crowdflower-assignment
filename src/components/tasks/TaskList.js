import React, { Component } from "react";
import Dragula from "react-dragula";

class TaskList extends Component {
  //--------------------------------------------------------------------------
  // Constructor and Life-cycle Methods
  //--------------------------------------------------------------------------
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.tasks !== null && nextProps.tasks !== "Error") {
      this.setState({ tasks: nextProps.tasks });
    }
  }

  //--------------------------------------------------------------------------
  // Other Helper Methods
  //--------------------------------------------------------------------------
  removeTask(_id) {
    this.props.removeTask(_id);
  }
  editTask(_id, show = false) {
    let tasks = this.state.tasks.map(task => {
      if (task._id === _id) {
        task.hidden = show;
      }
      return task;
    });
    this.setState({ tasks: tasks });
  }
  renderTasks() {
    if (this.props.tasks === null) {
      return <p>No task is loaded.</p>;
    } else if (this.props.tasks.length === 0) {
      return <p>Please create your first task.</p>;
    } else {
      return this.props.tasks.map(task => {
        // Whether we should hide the inputs
        let hiddenInput = true;
        if (this.state.tasks.length > 0) {
          hiddenInput = this.state.tasks[task._id - 1].hidden;
        }
        return (
          <div className="card darken-1" key={task._id}>
            <div className="card-content" id={"task_content_div_" + task._id}>
              <h5 className="card-title">
                <i className="fa fa-tasks" /> {task.title}
                <span className="float-right">
                  <a
                    onClick={() => this.editTask(task._id)}
                    className="gray-link"
                  >
                    <i className="fa fa-pencil" />
                  </a>{" "}
                  <a
                    onClick={this.removeTask.bind(this, task._id)}
                    className="gray-link"
                  >
                    <i className="fa fa-trash" />
                  </a>
                </span>
              </h5>
              <p>{task.content}</p>

              <div hidden={hiddenInput}>
                <input
                  placeholder="Task Content"
                  value={task.title}
                  className="input-large"
                  onChange={event =>
                    this.props.updateTask(
                      task._id,
                      "title",
                      this.props.tasks,
                      event
                    )}
                />
                <input
                  placeholder="Task Content"
                  value={task.content}
                  onChange={event =>
                    this.props.updateTask(
                      task._id,
                      "content",
                      this.props.tasks,
                      event
                    )}
                />
                <button
                  className="btn blue"
                  onClick={() => this.editTask(task._id, true)}
                >
                  OK
                </button>
              </div>
            </div>
            <div className="card-action">
              <i className="fa fa-clock-o" /> Last Edited:
              {" " + new Date(task.timeUpdated).toLocaleDateString()}
            </div>
          </div>
        );
      });
    }
  }
  dragulaDecorator = componentBackingInstance => {
    if (componentBackingInstance) {
      let options = {};
      let drake = Dragula([componentBackingInstance], options);
      drake.on("drop", (el, target, source, sibling) => {
        let endPosition = Array.from(el.parentNode.children).indexOf(el);
        this.props.enableSaveBtn();
        drake.cancel(true);
        this.props.dragTask(el.innerHTML, this.props.tasks, endPosition);
      });
    }
  };

  //--------------------------------------------------------------------------
  // Render to ReactDOM
  //--------------------------------------------------------------------------
  render() {
    return (
      <div className="" ref={this.dragulaDecorator}>
        {this.renderTasks()}
      </div>
    );
  }
}

export default TaskList;
