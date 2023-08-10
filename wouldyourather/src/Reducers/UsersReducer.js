

import { updateUserAnswer, AddNewUserModify } from '../Types';
let users = {
  sarahedo: {
    id: 'sarahedo',
    name: 'Sarah Edo',
    avatarURL: 'https://www.pngarts.com/files/3/Avatar-PNG-Pic.png',
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  tylermcginnis: {
    id: 'tylermcginnis',
    name: 'Tyler McGinnis',
    avatarURL: 'https://www.pngarts.com/files/3/Avatar-PNG-Pic.png',
    answers: {
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  johndoe: {
    id: 'johndoe',
    name: 'John Doe',
    avatarURL: 'https://www.pngarts.com/files/3/Avatar-PNG-Pic.png',
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  }
}


export default (state = users, action) => {


  ////console.log(action.payload)



  switch (action.type) {

    case updateUserAnswer:
      {
        const { authedUser, qid, answer } = action.payload;
        return ({
          ...state,
          [authedUser]: {
            ...state[authedUser],
            answers: {
              ...state[authedUser].answers,
              [qid]: answer
            }
          }
        })
      }

    case AddNewUserModify:
      {
        const question = action.payload;
        const authedUser = question.author;

        return ({
          ...state,
          [authedUser]: {
            ...state[authedUser],
            questions: state[authedUser].questions.concat([question.id])
          }
        })
      }

    default:
      return state
  }
}
