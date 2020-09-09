import React from 'react';
import TodoContainer from './TodoContainer';
import { connect }  from 'react-redux'
import { loadTodos } from '../actions/todos'

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
          "Content-type": "application/json; charset=UTF-8"
        }})
    .then(resp => resp.json())
    .then(todos => {
        console.log('hi')
      this.props.loadTodos(todos)

    })
  }


  renderTodos = () => {
    return this.props.todos.map(t => (
      <TodoContainer 
        key={t.id}
        title={t.title}
        content={t.content}
      />
    ));
  }

  render() {
    console.log(this.props, '------');
    return (
        <div>
            <div>
                <h3>Todo List</h3>
                <div className="ui items">{this.renderTodos()}</div>
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
  loadTodos
}


export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer)


// connect allows the react component read or write or read/write capabilities
//
//
//
//connect method:
// wires up a component to give it read and write access to the redux store
// it does this by feeding the relevant data to the component through its props
//
// it takes two arguments:
//  1) mapStatesToProps



// mapStateToProps:
// 1) gets access to the redux store state as its argument
// 2) the output of this function is always an object
// 3) all of the key/value pairs in the output become props on the component im connecting