import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import QuestionComponent from './Reusables/UnansweredComponent';
import LoginPage from './Login';

class HomePage extends Component {

  state = {
    currentState: "unanswered"
  }




  onPressUnasweredQustions() {

    if (this.state.currentState !== "unanswered")
      this.setState({ currentState: "unanswered" })
  }



  onPressAnsweredQustions() {

    if (this.state.currentState !== "answered")
      this.setState({ currentState: "answered" })
  }

  render() {



    return (

      (this.props.currentUser === null) ? (<LoginPage history={this.props.history} destination='/' />) : (<div style={{ display: "flex", justifyContent: "center", color: "black" }} >

        <div className="col-md-10">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">
                <span className="glyphicon glyphicon-circle-arrow-right"></span> <span className="font3"> Here is a question for you ! </span> </h3>
            </div>
            <div className="panel-body two-col">
              <div className="row">
                <div className="col-md-6 center">
                  <div className="">
                    <Button style={(this.state.currentState === 'unanswered') ? ({ backgroundColor: '#428BCA' }) : ({})} className="button" onClick={this.onPressUnasweredQustions.bind(this)} variant="contained">
                      Unaswered Questions
          </Button>
                  </div>

                </div>
                <div className="col-md-6 center">
                  <div className="">
                    <Button style={(this.state.currentState === 'answered') ? ({ backgroundColor: '#428BCA' }) : ({})} className="button" onClick={this.onPressAnsweredQustions.bind(this)} variant="contained">
                      Answered Questions
      </Button>
                  </div>
                </div>


              </div>
              <div className="row center">
                <div className="col-md-12">

                  {
                    (this.state.currentState === "unanswered") ? (

                      this.props.unanswered.map((question) => <QuestionComponent key={question.id} question={question} />
                      )




                    ) : (
                        this.props.answered.map((question) => <QuestionComponent key={question.id} question={question} />
                        )
                      )

                  }

                </div>



              </div>

              <div className="panel-footer center">

              </div>

            </div>
          </div>
        </div>
      </div>
      )
    )




  }
}

const mapStateToProps = (state, myProps) => {

  //console.log(myProps)

  if (state.currentLoggedInUser === null) {
    return ({
      currentUser: null,
      history: myProps.history

    })
  }
  else {
    const currentLoggedInUserAnswers = state.RegisteredUsers[state.currentLoggedInUser].answers;
    const questions = state.questions
    const unanswered = Object.keys(questions)
      .filter(key => currentLoggedInUserAnswers[key] === undefined)
      .map(key => questions[key])
      .sort(function (a, b) { return b.timestamp - a.timestamp })



    const answered = Object.keys(currentLoggedInUserAnswers)
      .map(key => { return ({ ...questions[key], answer: currentLoggedInUserAnswers[key] }) })
      .sort(function (a, b) { return b.timestamp - a.timestamp })
    return (
      {
        currentUser: state.currentLoggedInUser,
        answered,
        unanswered

      })
  }

}

export default connect(mapStateToProps)(HomePage);