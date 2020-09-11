import React from 'react';
import TodoContainer from './TodoContainer';
import TodoPage from './TodoPage';
import { connect }  from 'react-redux'
import { loadTodos } from '../actions/todos'
import { Link } from 'react-router-dom'


class TodosContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [] 
    }; 
  }

  componentDidMount(){

    if (!this.props.auth){
      this.props.history.push('/login')
    }


  //   fetch('http://localhost:3002/todos', {
  //       method: "GET",
  //       headers: {
  //         "access-control-allow-origin" : "*",
  //         "Content-type": "application/json"
  //       }})
  //   .then(resp => resp.json())
  //   .then(todos => {
  

  //   })
   }


  renderTodos = () => {
    console.log(this.props)
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
            <div id='listHeading'>
                <h2>To-Do List</h2>
                <button><Link to="/todos/new">New To-Do</Link></button>
              </div>
              <div className="ui items" >{this.renderTodos()}</div>
            </div>
        </div>
    )
  }
}


const mapStateToProps= (storeState) => {
  console.log("hi", storeState)
  return {
    todos: storeState.todos,
    auth: storeState.auth
  }
}

const mapDispatchToProps = {
  loadTodos,
}


export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer)

