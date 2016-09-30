import React from 'react'
import ReactDOM from 'react-dom'

class TaskApp extends React.Component {
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
                      <form>
                        <div className="form-group">
                          <label htmlFor="id-1"></label>
                          <input className="new-task-input" type="task" id="id-1" autoComplete="off" aria-describedby="AddNewTask" placeholder="Enter your task" />
                        </div>
                      </form>
                    </div>
                    <div className="task">
                      <div className="text-truncate">
                        <div className="custom-checkbox">
                          <div className="custom-checkbox">
                            <input type="checkbox" id="cb1" />
                            <label htmlFor="cb1" ><span>TasktastTask</span></label>
                          </div>  
                        </div>
                      </div>
                      <button type="button" className="btn btn-delete-task"></button>
                    </div>
                    <div className="task-footer">
                      <p className="small text-muted">1 Task</p>
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
