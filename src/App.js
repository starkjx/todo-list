import React, { Component } from 'react';
import './App.css';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      newTodo: '',
      todoList: [
        {id:1, title:'待办1'},
        {id:2, title:'待办2'},
        {id:3, title:'待办3'}
      ]
    }
  }
  render(){
    let todos = this.state.todoList.map((elem, index) => {
      //return <li>{todo.title}</li>
      return (
        <li key={elem.id}>
          <TodoItem todo={elem}/>
        </li>
      )
    })
    return (
      <div className="App">
        <h1>我的待办</h1>
        <div className="InputWrapper">
          <TodoInput content={this.state.newTodo}/>
        </div>
        <ol>
          {todos}
        </ol>
      </div>
    )
  }
}

export default App;
