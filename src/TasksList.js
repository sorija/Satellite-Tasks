import React from "react";
import Task from "./Task.js";

class TasksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasksLength: this.props.tasks.length,
      currentPage: 1
    };
  }
  divideTasks = () => {
    let startIndex = (this.state.currentPage - 1) * 5;
    let endIndex = this.state.currentPage * 5;
    return this.props.tasks.slice(startIndex, endIndex);
  };

  render() {
    // number of pages is equal to number of tasks divided by limit of tasks per page and rounded up
    const length = this.state.tasksLength / 5;
    const pagination = Array.from(
      { length: Math.ceil(length) },
      (_, i) => i + 1
    );
    return (
      <div>
        <ul>
          {this.divideTasks().map(task => (
            <li key={task.id}>
              <Task {...task} />
            </li>
          ))}
        </ul>
        <footer>
          Pages:
          <ul>
            {pagination.map(page => (
              <li key={page}>{page}</li>
            ))}
          </ul>
        </footer>
      </div>
    );
  }
}
export default TasksList;
