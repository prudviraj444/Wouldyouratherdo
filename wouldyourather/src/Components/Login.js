import React, { Component } from 'react';
import './Styles/loginStyle.css';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { AuthLogin } from '../Actions/shared';


class Login extends Component {

  state = {
    selected: "none"
  }

  handleChange(event) {

    const value = event.target.value;
    this.setState({ selected: value })

  }

  onSignIn() {

    //console.log(this.props)

    if (this.state.selected !== "none") {
      this.props.dispatch(AuthLogin(this.state.selected))
      this.props.history.push(this.props.destination);
    }
  }

  render() {
    return (

      <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: '15%' }}>
        <div className="col-md-6">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">
              </h3>
            </div>
            <div className="panel-body two-col">
              <div style={{ marginTop: "50px", textAlign: "center" }} className="row">
                <div className="col-md-12">

                </div>

              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="login">


                    <div  >
                      <div className="loginForm">
                        <hgroup>
                          <h1 style={{ fontSize: "40px" }} >Would You Rather</h1>
                        </hgroup>
                        <div>

                          <div  >
                            <h2 style={{ fontSize: "30px" }}>Select the user:</h2>
                          </div>

                        </div>



                      </div>
                    </div>
                  </div>

                </div>

              </div>

              <div style={{ marginTop: "50px", textAlign: "center" }} className="row">
                <div className="col-md-12">

                  <div style={{ fontSize: "30px" }} >
                    <select onChange={this.handleChange.bind(this)} value={this.state.selected} >
                      <option value="move" disabled>SELECT USER...</option>

                      {
                        Object.keys(this.props.RegisteredUsers).map((user) =>
                          <option key={user} value={user}>{user}</option>
                        )}
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>

              </div>

              <div style={{ marginTop: "50px", textAlign: "center" }} className="row">
                <div className="col-md-12">
                  <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }} >
                    <Button style={{ padding: "10px", width: "200px", fontSize: "30px" }} onClick={this.onSignIn.bind(this)} type="button" className="buttonui "> <span> Sign In </span>
                    </Button>
                  </div>
                </div>

              </div>
            </div>
            <div style={{ textAlign: "center" }} className="panel-footer">

            </div>
          </div>
        </div>
      </div>







    )
  }
}

const mapStateToProps = (state, myProps) => {
  //console.log(state)
  //console.log(myProps)
  return ({
    RegisteredUsers: state.RegisteredUsers
  })
}

export default connect(mapStateToProps)(Login);