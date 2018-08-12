import React, { Component } from 'react';
import './App.css';
import TodoList from "./todoList";

class App extends Component {


  
  constructor(props){
     super(props);
     this.state = {
        todoText:"",
        todos: []
     }
     this.removeTodo.bind(this);
  }

  handleInput = (e) => {
        this.setState({
      todoText:e.target.value
    })
  }

  handleSub = (e) => {
    if(e.key === "Enter"){
      this.setState(function(prevState, props) {
      var newTodo = {name: this.state.todoText};
      var todos = prevState.todos;
      todos.push(newTodo);
        return {
        todoText: "",
        todos: todos
      }
    });
    }
  }


  removeTodo(e){
    var index = e.target.getAttribute("index");
    var todos = this.state.todos;
    todos.splice(index, 1);
    this.setState({
      todoText: "",
      todos:todos
    });
  }

  render() {

    return (
      <div className="App">
       <div className="header">
        <h1>Todo Application</h1>
       </div>
       <div className="header">
        <input
        type="text"
        ref={((ref) => this.input = ref)}
        value={this.state.todoText}
        onChange={this.handleInput}
        onKeyPress={this.handleSub.bind(this)}
        />
       </div>

       <TodoList todos={this.state.todos} remove={this.removeTodo.bind(this)}/>
       

      </div>
    );
  }
}

export default App;
