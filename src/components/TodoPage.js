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
        .then(data => {
            console.log(data.todo)
           this.setState({todo: data.todo})
    
        })
      
    }

render(){
    if (!this.state.todo){
        return <h4>loading...</h4>
    }
    return <div id={'card'}>
        <Card>
        <Card.Content>
        <Card.Header>{this.state.todo.title}</Card.Header>
            <Card.Description>
                {this.state.todo.content}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <div className='ui three buttons'>
            <Button focus class="ui button">
            <Link to="/todos">Back</Link>
            </Button>
            <Button focus class="ui button" primary>
            <Link to={`/todos/edit/${this.props.id}`} >Edit</Link>
            </Button>
            <Button focus class="ui button" secondary >
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