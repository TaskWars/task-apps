import React from 'react'
import ReactDOM from 'react-dom'

class Task extends React.Component {
  render() {
    return (
      <div className="task">
        <div className="text-truncate">
          <div className="custom-checkbox">
            <div className="custom-checkbox">
              <input type="checkbox" id={"cb" + this.props.index} checked={ this.props.task.status == "done" ? true : false } />
              <label htmlFor={"cb" + this.props.index} ><span>{this.props.task.title}</span></label>
            </div>  
          </div>
        </div>
        <button type="button" className="btn btn-delete-task"></button>
      </div>
    )
  }
}

class TaskApp extends React.Component {
  constructor() {
    super();
    this.state = { 
      tasks: [
        {
          title: "Task 1",
          status: "active"
        }, {
          title: "Task 2",
          status: "done"
        }, {
          title: "Task 3",
          status: "active"
        }
      ],
      newTask: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleChange(event) {
    let value = event.target.value
    this.setState({newTask: value})
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      if(this.state.newTask.length != "") {
        let addTask = {
          title: this.state.newTask,
          status: "active"
        }
        let tasks = [].concat(this.state.tasks)
        tasks.unshift(addTask)

        this.setState({
          tasks: tasks,
          newTask: ""
        })
      }
    }
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="header">
              <img className="logo" src="../layout/images/logo.svg" />
              <h5><span className="brand-text">Task<em>Wars</em></span></h5>
              <div className="pull-xs-right">
                <a href="https://github.com/TaskWars/task-apps" target="_blank">
                  <i className="ion-social-github icon-big"></i>
                </a>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
        <div className="double-padding"></div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-8 offset-sm-2">
              <div className="row">
                <div className="col-xs-12">
                  <div className="input-wrapper">
                    <div className="new-task">
                      <div className="form-group">
                        <label htmlFor="id-1"></label>
                        <input className="new-task-input" type="task" name="newTask" id="id-1" autoComplete="off" aria-describedby="AddNewTask" placeholder="Enter your task" value={this.state.newTask} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
                      </div>
                    </div>

                    { this.state.tasks ? 
                      this.state.tasks.map(function(task, i) { return <Task task={task} key={i} index={i} /> })
                    : null }

                    <div className="task-footer">
                      <p className="small text-muted">{ this.state.tasks ? this.state.tasks.length : "0" } { !this.state.tasks || this.state.tasks && this.state.tasks.length > 1 ? "Tasks" : "Task" }</p>
                      <ul className="filter">
                        <li><button type="button" className="btn btn-outline-primary btn-sm">All</button></li>
                        <li><button type="button" className="btn btn-outline-primary btn-sm">Active</button></li>
                        <li><button type="button" className="btn btn-outline-primary btn-sm">Done</button></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="container">
            <span className="text-muted small text-right">
              <span className="brand-text">
                Task
                <em>Wars</em>&nbsp;
                · Version 0.0.0 ·&nbsp;
                <a href="https://github.com/TaskWars/task-apps" target="_blank">Github</a>&nbsp;
                ·&nbsp;
                <a href="https://twitter.com/taskwars_co" target="_blank">Twitter</a>
              </span>
            </span>
          </div>
        </footer>
      </div>
    )
  }
}

ReactDOM.render(
  <TaskApp />,
  document.getElementById('main-content')
)
