import React from 'react'
import ReactDOM from 'react-dom'

class Task extends React.Component {
  render() {
    return (
      <div className="task">
        <div className="text-truncate">
          <div className={ this.props.task.status == "deleted" ? "custom-checkbox deleted" : "custom-checkbox" }>
            <input disabled={ this.props.task.status == "deleted" ? true : false } type="checkbox" id={"cb" + this.props.index} checked={ this.props.task.status == "done" ? true : false } onChange={ (event) => this.props.handleStatusChange(event.target.checked, this.props.index)} />
            <label htmlFor={"cb" + this.props.index} ><span>{this.props.task.title}</span></label>
          </div>
        </div>
        <button type="button" className="btn btn-delete-task" onClick={ () => this.props.handleStatusChange("delete", this.props.index)}></button>
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
      newTask: "",
      status_filter: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleStatusChange = this.handleStatusChange.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this)
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

  handleStatusChange(event, index) {
    let tasks = [].concat(this.state.tasks)
    if(event == "delete") {
      tasks[index].status = "deleted"
    } else if(event == true) {
      tasks[index].status = "done"
    } else {
      tasks[index].status = "active"
    }
    this.setState({
      tasks: tasks
    })
  }

  handleFilterChange(status) {
    this.setState({
      status_filter: status
    })
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
                      this.state.tasks.map(function(task, i) { 
                        if(!this.state.status_filter || this.state.status_filter == task.status) {
                          return <Task task={task} key={i} index={i} handleStatusChange={this.handleStatusChange} />
                        }
                      }.bind(this))
                    : null }

                    <div className="task-footer">
                      <p className="small text-muted">{ this.state.tasks ? this.state.tasks.length : "0" } { !this.state.tasks || this.state.tasks && this.state.tasks.length > 1 ? "Tasks" : "Task" }</p>
                      <ul className="filter">
                        <li><button type="button" className={ this.state.status_filter == "active" ? "btn btn-outline-primary btn-sm current" : "btn btn-outline-primary btn-sm"} onClick={this.handleFilterChange.bind(this, "active")}>Active</button></li>
                        <li><button type="button" className={ this.state.status_filter == "done" ? "btn btn-outline-primary btn-sm current" : "btn btn-outline-primary btn-sm"} onClick={this.handleFilterChange.bind(this, "done")}>Done</button></li>
                        <li><button type="button" className={ this.state.status_filter == "deleted" ? "btn btn-outline-primary btn-sm current" : "btn btn-outline-primary btn-sm"} onClick={this.handleFilterChange.bind(this, "deleted")}>Deleted</button></li>
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
