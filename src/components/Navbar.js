import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { logoutSuccess } from '../actions/auth'

class Navbar extends React.Component {

  render() {
    return (
      <div className={`ui inverted blue menu`}>
        <Link to='/todosContainer' className="item">
          <h2 className="ui header">
            <i className={`${this.props.icon} icon`} />
            <div className="content">{this.props.title}</div>
            <div className="sub header">{this.props.description}</div>
          </h2>
        </Link>
        <div className="right menu">
          <div className="item">
      {
        this.props.auth ?
            <Link to='/login' className="ui button" onClick={this.props.logoutSuccess}>
              Logout
            </Link>
        :
            <Link to='/login' className="ui button">
              Sign in
            </Link>
      }
          </div>
        </div>
      </div>
    );

  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = {
  logoutSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
