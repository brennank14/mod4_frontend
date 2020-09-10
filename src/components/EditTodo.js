import React from 'react';
import { editTodo } from '../actions/todos'
import { connect } from 'react-redux'

class EditTodo extends React.Component {
    state = {
        title: this.props.title,
        content: this.props.content,
        done: this.props.done,
        user_id: 1
        }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        let title = this.state.title === "" ? this.props.note.title : this.state.title 
        let content = this.state.content === "" ? this.props.note.content : this.state.content
        const reqObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                content: content,
                done: this.state.done,
                user_id: 1
            })
        }
        
        fetch(`http://localhost:3002/todos/${this.props.match.params.id}`, reqObj)
        .then(resp => resp.json())
        .then(data => {
            this.props.editTodo(data)
            this.props.history.push('/todos')
        })
    }

    render() {
        return (
            <div className="todoListMain">
            <h1>Edit This To-Do Item</h1>
            <div className="header">
              <form onSubmit={this.handleSubmit}> 
                <input name="title" defaultValue={this.title} value={this.state.title} onChange={this.handleChange}>
                </input>
                <br />
                <input name="content" value={this.state.content} onChange={this.handleChange}>
                </input>
                <button type="submit">edit</button>
              </form>
            </div>
          </div>  
        )}
}


const mapDispatchToProps = {
    editTodo
}
    
export default connect(null, mapDispatchToProps)(EditTodo)