import React from 'react';
import {loginSuccess } from '../actions/auth'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadTodos } from '../actions/todos'

class LoginContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      error: null
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
          console.log(data)
          this.props.loginSuccess(data.user)
          this.props.history.push('/todos')
        }
      });
  }



  render() {
    return (
      <div className={`app`}>
        <h1>Welcome to Flatnote</h1>
        <h3>Please enter your username</h3>

      {this.state.error ? <h3 style={{color: 'red'}}>Incorrect Username or Password</h3> : null}
       <form onSubmit={this.handleSubmit}>
       <div class="ui focus input">
       <input focus onChange={this.handleChange} type='text' name='username' placeholder='Username' value={this.state.username} />
       </div>
        <br/>
        <br/>
        <div class="ui focus input">
          <input focus onChange={this.handleChange} type="password" name="password" placeholder='Password' value={this.state.password} />
        </div>
        <br/>
        <br/>
        <input focus class="ui button" type='submit' />
       </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  loginSuccess,
  loadTodos
}

export default connect(null, mapDispatchToProps)(LoginContainer);


