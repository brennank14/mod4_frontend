import React from 'react'
import { Link } from 'react-router-dom'
import { deleteTodo } from '../actions/todos'
import { Button, Card } from 'semantic-ui-react'
import { connect } from 'react-redux'


class TodoContainer extends React.Component {
    state = {
        done: false
    }

  handleDelete = () => {
    fetch(`http://localhost:3002/todos/${this.props.id}`, {
        method: 'DELETE', 
        headers: {
            "Content-Type": "application/json"}})
    .then(resp => {
      this.props.deleteTodo(this.props.id)
    })
  }

  


  render(){
    return <div id={"card"}>
        <Card >
        <Card.Content>
        <Card.Header>{this.props.title}</Card.Header>
            <Card.Description>
                {this.props.content}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <div className='ui three buttons'>
        <Button focus class="ui button">
            <Link to={`/todos/${this.props.id}`} >View</Link>
            </Button>
            <Button focus primary class="ui button">
            <Link to={`/todos/edit/${this.props.id}`} >Edit</Link>
            </Button>
            <Button focus secondary class="ui button" onClick={this.handleDelete}>
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

export default connect(null, mapDispatchToProps)(TodoContainer)

