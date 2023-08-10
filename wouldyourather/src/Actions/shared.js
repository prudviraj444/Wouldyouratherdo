import { currentLoggedInUser, updateUserAnswer, updateQuestionAnswer, AddNewUserModify, AddNewQuestionModify } from '../Types';
import { LogoutUser } from '../Types';


export const tempAction = () => {
  return (
    {
      type: "",
      data: []
    })
}


export const AuthLogin = (id) => {
  ////console.log(id)
  return ({
    type: currentLoggedInUser,
    id
  })
}


export const AuthLogout = () => {
  return ({
    type: LogoutUser
  })
}

export const updationQuestionAnswer = (authedUser, qid, answer) => {

  const data = {
    authedUser,
    qid, answer
  }
  return ({
    type: updateQuestionAnswer,
    payload: data
  })

}

export const onSubmitAnswer = (authedUser, qid, answer) => {

  const data = {
    authedUser,
    qid, answer
  }
  return ({
    type: updateUserAnswer,
    payload: data
  })

}

export const onAddNewUserChange = (question) => {

  ////console.log("heelllo 1");


  return ({
    type: AddNewUserModify,
    payload: question

  })


}

export const onAddNewQuestionChange = (question) => {
  ////console.log("hellooo 2")

  return ({
    type: AddNewQuestionModify,
    payload: question

  })

}