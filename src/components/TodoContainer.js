import React from 'react'
import { Link } from 'react-router-dom'
import { deleteTodo } from '../actions/todos'
import { Button, Card } from 'semantic-ui-react'
import { connect } from 'react-redux'




class TodoContainer extends React.Component {

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
    return <div>
        <Card>
        <Card.Content>
        <Card.Header>{this.props.title}</Card.Header>
            <Card.Description>
                {this.props.content}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <div className='ui four buttons'>
        <Button basic color='black'>
            <Link to={`/todos/${this.props.id}`} >View</Link>
            </Button>
            <Button basic color='green'>
            Done
            </Button>
            <Button basic color='yellow'>
            Edit
            </Button>
            <Button basic color='red' onClick={this.handleDelete}>
            Delete
            </Button>
        </div>
        </Card.Content>
        </Card>
    </div>
     
  }
}

const mapDispatchToProps = {
    deleteTodo
}

export default connect(null, mapDispatchToProps)(TodoContainer)

