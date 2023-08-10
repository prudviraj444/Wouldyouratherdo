import { currentLoggedInUser } from '../Types';
import { LogoutUser } from '../Types';



const initialState = null;



export default (state = initialState, action) => {



  switch (action.type) {

    case currentLoggedInUser:
      return action.id

    case LogoutUser:
      return null

    default:
      return state
  }
}
