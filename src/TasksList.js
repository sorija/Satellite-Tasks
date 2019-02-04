import React from "react";
import Task from "./Task.js";

class TaskList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.tasks.map(task => (
            <li key={task.id}>
              <Task {...task} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default TaskList;
