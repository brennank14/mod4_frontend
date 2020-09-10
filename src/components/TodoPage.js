import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../actions/todos'
import { Link } from 'react-router-dom'
import { Button, Card } from 'semantic-ui-react'
import TodoContainer from './TodoContainer'

class TodoPage extends React.Component {
    state = {
        todo: null
    }

componentDidMount(){
    
        fetch(`http://localhost:3002/todos/${this.props.match.params.id}`, {
            method: "GET",
            headers: {
              "access-control-allow-origin" : "*",
              "Content-type": "application/json"
            }})
    
        .then(resp => resp.json())
        .then(todo => {
           this.setState({todo: todo})
    
        })
      
    }

render(){
    if (!this.state.todo){
        return <h4>loading...</h4>
    }
    return <div>
        <Card>
        <Card.Content>
        <Card.Header>{this.state.todo.title}</Card.Header>
            <Card.Description>
                {this.state.todo.content}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <div className='ui three buttons'>
            <Button basic color='green'>
            <Link to="/todos">Back</Link>
            </Button>
            <Button basic color='yellow'>
            <Link to={`/todos/edit/${this.props.id}`} >Edit</Link>
            </Button>
            <Button basic color='red' onClick={this.props.handleDelete}>
            Delete
            </Button>
        </div>
        </Card.Content>
        </Card>
    </div>

    }
}
const mapDispatchToProps = {
    deleteTodo,
  }

export default connect(null, mapDispatchToProps)(TodoPage)