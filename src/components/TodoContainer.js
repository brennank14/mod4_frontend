import React from 'react'
import { Button, Card } from 'semantic-ui-react'


class TodoContainer extends React.Component {
constructor() {
    super();
}
  render(){
    console.log(this.props)
    return <div>
        <Card>
        <Card.Content>
        <Card.Header>{this.props.title}</Card.Header>
            <Card.Description>
                {this.props.content}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <div className='ui three buttons'>
            <Button basic color='green'>
            Complete Todo
            </Button>
            <Button basic color='yellow'>
            Edit Todo
            </Button>
            <Button basic color='red'>
            Delete Todo
            </Button>
        </div>
        </Card.Content>
        </Card>
    </div>
     
  }
}

export default TodoContainer

