import axios from "axios";
import * as TYPES from "./types";
import { USERNAME } from "../config/config";

export const fetchTasks = () => async dispatch => {
  try {
    const res = await axios.get(
      `http://cfassignment.herokuapp.com/${USERNAME}/tasks`
    );
    dispatch({ type: TYPES.FETCH_TASKS_SUCCESS, payload: res.data });
    return true;
  } catch (e) {
    dispatch({
      type: TYPES.FETCH_TASKS_FAIL,
      payload: "Error: Request failed when fetching data. Please refresh."
    });
    return false;
  }
};

// Save Tasks
export const saveTasks = tasks => async dispatch => {
  try {
    await axios.post(`http://cfassignment.herokuapp.com/${USERNAME}/tasks`, {
      tasks
    });
    dispatch({
      type: TYPES.SAVE_TASKS_SUCCESS,
      payload: { tasks, errors: null }
    });
    return true;
  } catch (e) {
    dispatch({
      type: TYPES.SAVE_TASKS_FAIL,
      payload: {
        tasks,
        errors: "Error: Request failed when saving data. Please try again."
      }
    });
    return false;
  }
};

// Add Task
export function addTask(tasks) {
  tasks.unshift({
    _id: tasks.length + 1,
    title: "New Task",
    content: "To be edited...",
    hidden: false,
    timeUpdated: new Date().toLocaleDateString()
  });
  // Update _id
  for (let i = 0; i < tasks.length; i++) {
    tasks[i]._id = i + 1;
  }
  return {
    type: TYPES.UPDATE_TASK,
    payload: tasks
  };
}

// Remove Task
export function removeTask(tasks, _id) {
  tasks = tasks.filter(task => {
    return task._id !== _id;
  });
  for (let i = 0; i < tasks.length; i++) {
    tasks[i]._id = i + 1;
  }
  return {
    type: TYPES.UPDATE_TASK,
    payload: tasks
  };
}

// Drag Task
export function dragTask(taskHTML, tasks, endPos) {
  let newTasks = [];

  // Get current task ID
  let nextIndex = taskHTML.indexOf("task_content_div_");
  taskHTML = taskHTML.substring(nextIndex + 17);
  let startPos = parseInt(taskHTML.substring(0, taskHTML.indexOf('"')), 10) - 1;
  let newTask = tasks[startPos];

  // Generate new task list
  for (let i = 0; i < tasks.length; i++) {
    if (i < Math.min(startPos, endPos) || i > Math.max(startPos, endPos)) {
      newTasks.push(tasks[i]);
      continue;
    }
    if (startPos < endPos) {
      if (i === startPos) {
        continue;
      } else {
        newTasks.push(tasks[i]);
        if (i === endPos) newTasks.push(newTask);
      }
    } else {
      if (i === startPos) {
        continue;
      } else {
        if (i === endPos) newTasks.push(newTask);
        newTasks.push(tasks[i]);
      }
    }
  }

  // Update "_id"
  for (let i = 0; i < newTasks.length; i++) {
    newTasks[i]._id = i + 1;
  }

  return {
    type: TYPES.UPDATE_TASK,
    payload: newTasks
  };
}

// Update Task
export function updateTask(tasks) {
  let newTasks = [];
  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];
    newTasks.push({
      _id: i + 1,
      title: task.title,
      content: task.content,
      hidden: task.hidden,
      timeUpdated: task.timeUpdated
    });
  }
  return {
    type: TYPES.UPDATE_TASK,
    payload: newTasks
  };
}
