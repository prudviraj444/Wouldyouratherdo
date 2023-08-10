import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import HomePage from './Components/Homepage';
import Leaderboard from './Components/LeaderBoard';
import PostQuestion from './Components/PostQuestion';
import ViewQuestion from './Components/Reusables/ViewQuestionComponent.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import navbar from './Components/navbar'
import { connect } from 'react-redux';
import ErrorMessage from './Components/Reusables/ErrorComponent';





class App extends Component {

  render() {
    return (
      <div>

        {

          <Router>
            <Route component={navbar} />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/add' component={PostQuestion} />
              <Route path='/login' component={Login} />
              <Route path='/leaderboard' component={Leaderboard} />
              <Route path='/question/:id' component={ViewQuestion} />

              <Route component={ErrorMessage} />

            </Switch>
          </Router>



          // (this.props.logggedIn) ? (

          //   <Router>

          //     <Route path='/' component={navbar} />
          //     <Switch>
          //       <Route exact path='/' component={HomePage} />
          //       <Route path='/login' component={Login} />
          //       <Route path='/add' component={PostQuestion} />
          //       <Route path='/leaderboard' component={Leaderboard} />
          //       <Route path='/question/:id' component={ViewQuestion} />
          //       <Route path='/404' component={ErrorMessage} />
          //       <Redirect to='/404' />

          //     </Switch>
          //   </Router>
          // ) :
          //   (
          //     <Router>
          //       <Switch>
          //         <Route exact path='/' component={Login} />
          //         <Route path='/404' component={ErrorMessage} />
          //         <Redirect to='/404' />
          //       </Switch>
          //     </Router>

          //   )
        }
      </div >
    );
  }
}

const mapStateToProps = (state) => {
  return (
    {
      logggedIn: (state.currentLoggedInUser !== null)

    }
  )
}

export default connect(mapStateToProps)(App);
