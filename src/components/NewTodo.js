import React from 'react';
import { addTodo } from '../actions/todos'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class NewTodo extends React.Component {
    state = {
            title: '',
            content: '',
            done: false
        }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        
        const reqObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: this.state.title,
                content: this.state.content,
                done: false
            }
            )}
        
        fetch(`http://localhost:3002/todos`, reqObj)
        .then(resp => resp.json())
        .then(data => {console.log(data)
            //this.props.addTodo(data)
        }
        )
    }

    render() {
        return (
            <div className="todoListMain">
            <h1>Add a New To-Do Item</h1>
            <div className="header">
              <form onSubmit={this.handleSubmit}> 
                <input name="title" placeholder="enter to-do item" value={this.state.title} onChange={this.handleChange}>
                </input>
                <br />
                <input name="content" placeholder="enter description" value={this.state.content} onChange={this.handleChange}>
                </input>
                <button type="submit"><Link to="/todos">add</Link></button>
              </form>
            </div>
          </div>  
        )}
}


const mapStateToProps = state => {
    return { user: state.user }
}

const mapDispatchToProps = {
    addTodo
}
    
export default connect(mapStateToProps, mapDispatchToProps)(NewTodo)