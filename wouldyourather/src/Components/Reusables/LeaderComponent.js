import React, { Component } from 'react';
import '../Styles/QuestionStyle.css';
import Paper from '@material-ui/core/Paper';





class QuestionComponent extends Component {

  state = {
    selected: null
  }

  handleChange(e) {
    this.setState({
      selected: e.target.value
    })
  }

  onVote() {

  }

  render() {

    ////console.log(this.props)

    const answered = Object.keys(this.props.user.answers).length;
    const created = this.props.user.questions.length;
    const score = answered + created;
    const name = this.props.user.name;
    const avatarURL = this.props.user.avatarURL;

    ////console.log(answered);
    ////console.log(created)
    ////console.log(name)
    ////console.log(avatarURL)

    return (
      <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
        <div className="col-md-6">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">
              </h3>
            </div>
            <div className="panel-body two-col">
              <div style={{ textAlign: "center" }} className="row">
                <div className="col-md-3">
                  <div className="">
                    <img height="120px" width="140px" src={avatarURL} alt="Flowers" />

                  </div>
                </div>
                <div className="col-md-6">
                  <div className="">
                    <div>
                      <h1 style={{ fontSize: 40 }}>{name}  </h1>
                    </div>

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />




                  </div>
                </div>
                <div className="col-md-3">
                  <div className="">
                    <Paper style={{ height: 130 }} elevation={5} >
                      <div style={{ textAlign: "center", fontSize: 30 }}> Score:
                      <div style={{ textAlign: "center", fontSize: 55 }}> {score} </div>


                      </div>
                    </Paper>


                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div style={{ textAlign: "center" }} className="well well-sm ">


                    <label style={{ fontSize: 30 }} >
                      {`Answered Questions : ${answered}`}
                    </label>

                  </div>
                </div>

              </div>
              <div className="row">
                <div className="col-md-12">
                  <div style={{ textAlign: "center" }} className="well well-sm ">

                    <label style={{ fontSize: 30 }} >
                      {`Created Questions : ${created}`}
                    </label>

                  </div>
                </div>

              </div>
            </div>
            <div style={{ textAlign: "center" }} className="panel-footer">


            </div>
          </div>
        </div>
      </div >

    )
  }
}


export default QuestionComponent;