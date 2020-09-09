import React from 'react';
//import { Link } from 'react-router-dom'

class LoginContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      username: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }



  render() {
    console.log(this.props)
    return (
      <div className={`app`}>
        <h1>Welcome to Flatnote</h1>
        <h3>Please enter your username</h3>


       <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} type='text' placeholder="username" value={this.state.username} />
        <input type='submit' />
       </form>
      </div>
    );
  }
}

export default LoginContainer;
















//   handleSubmit = (e) => {
//     const { username } = this.state

//     e.preventDefault()
//     fetch(`http://localhost:3002/todos/${id}`)
//     .then(resp => resp.json())
//     .then(data => {

//       this.props.history.push(`/dashboard/${id}`)
//     })
    
//   }