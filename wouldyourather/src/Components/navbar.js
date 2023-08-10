import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { connect } from 'react-redux';
import { AuthLogout } from '../Actions/shared';
import { Link } from 'react-router-dom'



class App extends Component {

  OnLogout() {

    this.props.dispatch(AuthLogout());
  }

  render() {
    return (
      <div style={{ fontSize: "20px", color: "#428BCA", backgroundColor: "#428BCA" }}>

        <Navbar>
          <Link to='/'>
            <Navbar.Brand style={{ fontSize: "32px", color: "white", fontWeight: 'bold' }}>Would You Rather</Navbar.Brand>
          </Link>
          <Nav className="mr-auto">
            <Link to='/'> <Nav style={{ fontSize: "20px", color: "white", marginLeft: "20px", marginRight: "20px" }}>Home </Nav> </Link>
            <Link to='/add'> <Nav style={{ fontSize: "20px", color: "white", marginRight: "20px" }}>New </Nav> </Link>
            <Link to='/leaderboard'> <Nav style={{ fontSize: "20px", color: "white", marginRight: "20px" }}>Leaderboard </Nav> </Link>
          </Nav>
          <span style={{ color: "white", marginRight: "20vw" }}>{(this.props.userId == null) ? ("Login to Continue") : (`Welcome`)} <Link to='/' style={{ color: "white", fontSize: "25px", fontWeight: 'bold' }}> {(this.props.userId == null) ? ("") : (this.props.userId.toUpperCase())}  </Link></span>
          <Link to='/'><Nav style={{ fontSize: "20px", color: "white", marginRight: "20px" }} onClick={this.OnLogout.bind(this)} > {(this.props.userId == null) ? ("") : (`Logout`)} </Nav></Link>
        </Navbar>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  if (state.currentLoggedInUser === null) {
    return ({
      userId: null
    })
  }
  return ({
    userId: state.RegisteredUsers[state.currentLoggedInUser].name
  })
}

export default connect(mapStateToProps)(App);