import React, { Component } from 'react';
import './App.css';
import 'normalize.css';
import './reset.css';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      newTodo: '',
      todoList: []
    }
  }
  addTodo(event){
    this.state.todoList.push({
      id: idMaker(),
      title: event.target.value,
      status: null,
      deleted: false
    })
    this.setState({
      newTodo: '',
      todoList: this.state.todoList
    })
  }
  changeTitle(event){
    this.setState({
      newTodo: event.target.value,
      todoList: this.state.todoList
    })
  }
  render(){
    let todos = this.state.todoList.map((elem, index) => {
      //return <li>{todo.title}</li>
      return (
        <li key={index}>
          <TodoItem todo={elem}/>
        </li>
      )
    })
    return (
      <div className="App">
        <h1>我的待办</h1>
        <div className="InputWrapper">
          <TodoInput content={this.state.newTodo}
            onSubmit={this.addTodo.bind(this)}
            onChange={this.changeTitle.bind(this)}/>
        </div>
        <ol>
          {todos}
        </ol>
      </div>
    )
  }
}

export default App;


let id = 0

function idMaker(){
  id += 1
  return id
}