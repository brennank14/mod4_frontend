import React from 'react';
import {loginSuccess } from '../actions/auth'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class LoginContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: 'kathleen',
      password: 'brennan'
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const reqObj = {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }

    fetch('http://localhost:3002/api/v1/auth', reqObj)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          this.setState({
            error: data.error
          })
        } else {

        }
      });
  }

  render() {
    console.log(this.props)
    return (
      <div className={`app`}>
        <h1>Welcome to Flatnote</h1>
        <h3>Please enter your username</h3>


       <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} type='text' placeholder="username" value={this.state.username} />
        <input onChange={this.handleChange} type="password" placeholder="password" value={this.state.password} />
        <input type='submit' />
       </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  loginSuccess
}

export default connect(null, mapDispatchToProps)(LoginContainer);
















//   handleSubmit = (e) => {
//     const { username } = this.state

//     e.preventDefault()
//     fetch(`http://localhost:3002/todos/${id}`)
//     .then(resp => resp.json())
//     .then(data => {

//       this.props.history.push(`/dashboard/${id}`)
//     })
    
//   }