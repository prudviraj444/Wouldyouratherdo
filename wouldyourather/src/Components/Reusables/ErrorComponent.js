import React, { Component } from 'react';
import '../Styles/QuestionStyle.css';
import LoginPage from '../Login';
import { connect } from 'react-redux'


class Message extends Component {



  render() {
    return (

      (this.props.currentUser === null) ? (<LoginPage history={this.props.history} destination='/404' />) : (

        <div style={{ display: 'flex', flex: 1, justifyContent: 'center', marginTop: '5%' }}>
          <div className="col-md-10">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">
                </h3>
              </div>
              <div className="panel-body two-col">
                <div className="row">
                  <div className="col-md-12">
                    <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }} className="col-md-12">
                      <div className="panel panel-primary">
                        <div className="panel-heading">
                          <h3 className="panel-title">
                          </h3>
                        </div>
                        <div className="panel-body two-col">
                          <div style={{ textAlign: "center" }} className="row">
                            <div style={{ display: 'flex', flex: 1, justifyContent: 'center', marginTop: '40px' }}>
                              <div className="col-md-12">
                                <div>
                                  <h1 style={{ color: "black" }}>OOPS! Invalid page URL!</h1>

                                  <h1 style={{ color: "black" }}>Try Another Page</h1>
                                  <div>

                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ textAlign: "center" }} className="panel-footer">
              </div>
            </div>
          </div>
        </div>)
    )
  }
}


const mapStateToProps = (state, myProps) => {



  return ({
    currentUser: state.currentLoggedInUser,
  })


}

export default connect(mapStateToProps)(Message);