// dependencies
import _ from 'lodash';
import React, { Component } from 'react';
// local dependencies
import TodosList from '../TodosList/TodosList';
import './App.css';
class App extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      todos: {}
    };
  }
  toggleToDo(id, e) {
    e.preventDefault();
    const todos = _.clone(this.state.todos);
    todos[id].completed = !todos[id].completed;
    this.setState({ todos });
  }
  componentDidMount() {
    this.setState({
      todos: {
        1: { id: 1, completed: true, description: 'task 1' },
        2: { id: 2, completed: false, description: 'task 2' },
        3: { id: 3, completed: false, description: 'task 3' },
        4: { id: 4, completed: false, description: 'task 4' }
      }
    });
  }

  render() {
    const { todos } = this.state;
    return (
      <TodosList>
        {_.map(todos, (todo, id) => (
          <li
            key={id}
            className={todo.completed ? 'completed' : ''}
            onClick={e => this.toggleToDo(id, e)}
          >
            {todo.description}
          </li>
        ))}
      </TodosList>
    );
  }
}
export default App;
