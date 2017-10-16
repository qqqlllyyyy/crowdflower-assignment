import React, { Component } from "react";
import { connect } from "react-redux";
import AlertContainer from "react-alert";
import {
  fetchTasks,
  addTask,
  removeTask,
  dragTask,
  saveTasks,
  updateTask
} from "../actions";

import TaskList from "./tasks/TaskList";

// import Dragula from "react-dragula";

export class Dashboard extends Component {
  alertOptions = {
    offset: 60,
    position: "top right",
    theme: "dark",
    time: 5000,
    transition: "scale"
  };

  showAlert = (type = "error", content = "") => {
    this.msg.show(content, {
      time: 50000,
      type: type
    });
  };

  //--------------------------------------------------------------------------
  // Constructor and Life-cycle Methods
  //--------------------------------------------------------------------------
  constructor(props) {
    super(props);
    this.state = { modified: false };
  }
  componentDidMount() {
    this.props.fetchTasks();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ tasks: nextProps.tasks });
  }

  //--------------------------------------------------------------------------
  // Other Helper Methods
  //--------------------------------------------------------------------------
  enableSaveBtn(status = true) {
    this.setState({ modified: status });
  }
  addTask() {
    this.props.addTask(this.props.tasks);
    this.enableSaveBtn();
  }
  saveTasks() {
    this.props.saveTasks(this.props.tasks).then(res => {
      if (res) {
        this.showAlert("success", "Tasks saved successfully.");
        this.enableSaveBtn(false);
      } else {
        this.showAlert("error", this.props.errors);
      }
    });
  }
  removeTask(_id) {
    this.props.removeTask(this.props.tasks, _id);
    this.enableSaveBtn();
  }
  dragTask(taskHTML, tasks, endPos) {
    this.props.dragTask(taskHTML, tasks, endPos);
  }
  updateTask(_id, field, tasks, event) {
    tasks[_id - 1][field] = event.target.value;
    tasks[_id - 1].hidden = false;
    this.props.updateTask(tasks);
  }

  //--------------------------------------------------------------------------
  // Render to ReactDOM
  //--------------------------------------------------------------------------
  render() {
    console.log(this.props.tasks);
    if (this.props.errors !== null) {
      this.showAlert("error", this.props.errors);
    }

    return (
      <div className="container container-main">
        <h4>Tasks</h4>
        <AlertContainer ref={a => (this.msg = a)} {...this.alertOptions} />
        <button
          className="btn top-btn m-l-2"
          onClick={this.saveTasks.bind(this)}
          disabled={!this.state.modified}
        >
          <i className="material-icons left">save</i>Save
        </button>
        <button
          onClick={this.addTask.bind(this)}
          className="btn top-btn red lighten-1 m-l-2"
        >
          <i className="material-icons left">add</i>Add Task
        </button>

        <TaskList
          removeTask={this.removeTask.bind(this)}
          enableSaveBtn={this.enableSaveBtn.bind(this)}
          dragTask={this.dragTask.bind(this)}
          updateTask={this.updateTask.bind(this)}
          tasks={this.props.tasks}
        />
      </div>
    );
  }
}

// Destructured `state`
function mapStateToProps({ tasks, errors }) {
  return { tasks, errors };
}

export default connect(mapStateToProps, {
  fetchTasks,
  addTask,
  removeTask,
  dragTask,
  saveTasks,
  updateTask
})(Dashboard);
