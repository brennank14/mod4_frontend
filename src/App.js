
import React from 'react';
import TodosContainer from './components/TodosContainer';
import TodoPage from './components/TodoPage';
import LoginContainer from './components/LoginContainer';
import NewTodo from './components/NewTodo';
import { Switch, Route } from 'react-router-dom'
//import { loadTodos, deleteTodo, addTodo, showTodo } from './actions/todos';

const App = () => {
  return (
    <div className="App">
    
      <Switch>
        <Route exact path='/todos' component={TodosContainer} />
        <Route exact path='/' component={TodosContainer} />
        <Route exact path='/login' component={LoginContainer} />
        <Route exact path='/todos/new' component={NewTodo} />
        <Route exact path='/todos/:id' component={TodoPage} />
      </Switch>
    </div>
  );
};

export default App;
