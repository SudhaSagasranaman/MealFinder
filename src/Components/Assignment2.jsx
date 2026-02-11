import React, { Component } from "react";

class Assignment2 extends Component {

  state = {
    tasks: []
  };

  // add task
  AddTask = (e) => {
    e.preventDefault();

    const { desc, date } = e.target;

    this.setState(prevState => ({
      tasks: [
        ...prevState.tasks,
        {
          id: prevState.tasks.length + 1,
          desc: desc.value,
          date: date.value
        }
      ]
    }));

    // clear inputs AFTER reading values
   // e.target.reset();
  };

  // delete task
  deleteTask = (id) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => task.id !== id)
    }));
  };

  // update task (destructuring way)
  updateTask = (e, id) => {
    e.preventDefault();

    //  SAFE destructuring
    const { desc, date } = e.target;

    this.setState(prevState => ({
      tasks: prevState.tasks.map(task =>
        task.id === id
          ? {
              ...task,
              desc: desc.value,
              date: date.value
            }
          : task
      )
    }));
  };

  render() {
    return (
      <>
        <h1>ToDoList</h1>

        <div className="container">

          {/* add task form*/}
          <form onSubmit={this.AddTask} className="mb-3">
            <input
              type="text"
              name="desc"
              placeholder="Task description"
              className="me-2"
              required
            />

            <input
              type="date"
              name="date"
              className="me-2"
              required
            />

            <button type="submit">Add Task</button>
          </form>

          {/* task list */}
          <div className="row">
            {this.state.tasks.map(task => (
              <div className="card me-2 w-25 mb-3" key={task.id}>
                <div className="card-body">

                  <form onSubmit={(e) => this.updateTask(e, task.id)}>

                    <input
                      type="text"
                      name="desc"
                      defaultValue={task.desc}
                      className="form-control mb-2"
                      required
                    />

                    <input
                      type="date"
                      name="date"
                      defaultValue={task.date}
                      className="form-control mb-2"
                      required
                    />

                    <button
                      type="submit"
                      className="btn btn-primary me-2"
                    >
                      Update
                    </button>

                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => this.deleteTask(task.id)}
                    >
                      Delete
                    </button>

                  </form>

                </div>
              </div>
            ))}
          </div>

        </div>
      </>
    );
  }
}

export default Assignment2;
