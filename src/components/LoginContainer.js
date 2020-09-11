import React from 'react';
import {loginSuccess } from '../actions/auth'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class LoginContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: 'kathleen',
      password: 'brennan',
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

      {this.state.error ? <h6>this.state.error</h6> : null}
       <form onSubmit={this.handleSubmit}>
       <div class="ui focus input">
       <input focus fluid onChange={this.handleChange} type='text' placeholder='Username' value={this.state.username} />
       </div>
        <br/>
        <br/>
        <div class="ui focus input">
          <input focus fluid onChange={this.handleChange} type="password" laceholder='Password' value={this.state.password} />
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
  loginSuccess
}

export default connect(null, mapDispatchToProps)(LoginContainer);


