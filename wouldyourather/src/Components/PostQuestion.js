import React, { Component } from 'react';
import '../Components/Styles/QuestionStyle.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'
import { formatQuestion } from '../data';
import { onAddNewUserChange, onAddNewQuestionChange } from '../Actions/shared';
import LoginPage from './Login';



class QuestionComponent extends Component {

  state = {
    optionOne: "",
    optionTwo: ""
  }

  onOptionOneChange(e) {
    this.setState({
      optionOne: e.target.value
    })
  }
  onOptionTwoChange(e) {
    this.setState({
      optionTwo: e.target.value
    })
  }

  componentDidMount() {

  }

  onPost() {

    const { optionOne, optionTwo } = this.state;

    if (optionOne === "" || optionTwo === "") {

      alert("The option field cannt be empty");
      return;
    }

    const { currentUser } = this.props;

    const data = { optionOneText: optionOne, optionTwoText: optionTwo, author: currentUser };
    const Question = formatQuestion(data);

    this.props.dispatch(onAddNewUserChange(Question));
    this.props.dispatch(onAddNewQuestionChange(Question));

    this.props.history.push('/')


  }

  render() {

    return (

      (this.props.currentUser === null) ? (<LoginPage history={this.props.history} destination='/add' />) : (<div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
        <div className="col-md-8">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">
                <span className="glyphicon glyphicon-circle-arrow-right"></span>Create New Question: </h3>
            </div>
            <div className="panel-body two-col">
              <div className="row">
                <div className="col-md-12">
                  <div className="">
                    <h1>Complete the question : </h1>
                    <hr />

                  </div>
                </div>

                <br /><br /><br /><br /><br /><br />


                <div className="col-md-12">
                  <div className="">
                    <h1 style={{ fontSize: 50 }}>Would you rather : </h1>
                    <hr />

                  </div>
                </div>

              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="well well-sm">
                    <h1>
                      <TextField

                        style={{ margin: 8, fontSize: "200px" }}
                        placeholder="Option1"
                        fullWidth
                        onChange={this.onOptionOneChange.bind(this)}
                      />
                    </h1>

                  </div>
                </div>

              </div>



              <div className="row">
                <div className="col-md-12">

                  <h2 style={{ textAlign: "center" }} > OR </h2>

                </div>

              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="well well-sm">
                    <TextField

                      style={{ margin: 8 }}
                      placeholder="Option2"
                      fullWidth
                      margin="normal"
                      onChange={this.onOptionTwoChange.bind(this)}

                    />
                  </div>
                </div>

              </div>
            </div>
            <div style={{ textAlign: "center" }} className="panel-footer">
              <Button onClick={this.onPost.bind(this)} style={{ height: 50, width: "50%", backgroundColor: "#428BCA" }} variant="contained">
                <h1>SUBMIT</h1>
              </Button>
            </div>
          </div>
        </div>
      </div>)
    )
  }
}

const mapStateToProps = (state) => {
  //console.log(state)

  return ({
    currentUser: state.currentLoggedInUser
  })
}


export default connect(mapStateToProps)(QuestionComponent);