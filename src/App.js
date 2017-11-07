import React, { Component } from 'react';
import TodoList from './Components/TodoList'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


class App extends Component {
  render() {
    return (
      <div className="App container">
          <TodoList/>        
      </div>
    );
  }
}

export default App;
