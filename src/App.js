import React from 'react';
import './App.css';

class App extends React.Component {
    componentDidMount = () => {
      console.log("This is lifecycle component mount");
    };

    log = () => {
        console.log("On ADD ITEM");
    }

    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <div className="todoList-header">
                        <h3 className="todoList-header__title">What to Learn</h3>
                        <div className="todoList-newTaskForm">
                            <input type="text" placeholder="New task name"/>
                            <button onClick={this.log}>Add</button>
                        </div>
                    </div>
                    <div className="todoList-tasks">
                        <div className="todoList-task">
                            <input type="checkbox" checked={true}/>
                            <span>CSS</span>
                        </div>
                        <div className="todoList-task">
                            <input type="checkbox" checked={false}/>
                            <span>JS</span>
                        </div>
                        <div className="todoList-task">
                            <input type="checkbox" checked={false}/>
                            <span>ReactJS</span>
                        </div>
                        <div className="todoList-task">
                            <input type="checkbox" checked={true}/>
                            <span>Patterns</span>
                        </div>
                    </div>
                    <div className="todoList-footer">
                        <button>All</button>
                        <button>Completed</button>
                        <button>Active</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

