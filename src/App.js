
import React from 'react';
import TodosContainer from './components/TodosContainer';
import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/todos' component={TodosContainer} />
        <Route exact path='/' component={TodosContainer} />
      </Switch>
    </div>
  );
};

export default App;
