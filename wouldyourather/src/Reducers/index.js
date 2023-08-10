import { combineReducers } from 'redux';
import RegisteredUsers from './UsersReducer'
import currentLoggedInUser from './AuthReducer'
import questions from './QuestionsReducer';

export default combineReducers({
  RegisteredUsers,
  currentLoggedInUser,
  questions

})





