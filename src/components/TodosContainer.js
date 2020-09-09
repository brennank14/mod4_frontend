import React from 'react';
import TodoContainer from './TodoContainer';
//import TodoPage from './TodoPage';
import { connect }  from 'react-redux'
import { loadTodos, deleteTodo, showTodo } from '../actions/todos'
import { Link } from 'react-router-dom'


class TodosContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [] 
    }; 
  }

  componentDidMount(){
    fetch('http://localhost:3002/todos', {
        method: "GET",
        headers: {
          "access-control-allow-origin" : "*",
          "Content-type": "application/json"
        }})
    .then(resp => resp.json())
    .then(todos => {
        
      this.props.loadTodos(todos)

    })
  }


  renderTodos = () => {
    return this.props.todos.map(t => (
      <TodoContainer 
        key={t.id}
        title={t.title}
        content={t.content}
        id={t.id}
      />
    ));
  }


  render() {
    return (
        <div>
            <div>
                <h3>To-Do List</h3>
                <button><Link to="/todos/new">New To-Do</Link></button>
                <div className="ui items" >{this.renderTodos()}</div>
            </div>
        </div>
    );
  }
}


const mapStateToProps= (storeState) => {
  return {
    todos: storeState.todos,
  }
}

const mapDispatchToProps = {
  loadTodos,
  deleteTodo,
  showTodo
}


export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer)

