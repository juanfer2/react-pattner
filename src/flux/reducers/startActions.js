import {
  GET_DATA_ERROR,
  GET_DATA_SUCCESS,
  GET_DATA_START
} from '../../const/actions'

const initialState = {
  data: [],
  loandingData: false,
  errorData: null
}

export default function(state = initialState, action){
  switch (action.type) {
    case GET_DATA_START:
      return {...state,  loandingData: true}
    case GET_DATA_SUCCESS:
          return {...state,  data: action.payoad, loandingData: false}
    case GET_DATA_ERROR:
        return {...state,  errorData: action.payoad, loandingData: false};
    default:
      return state
  }
}