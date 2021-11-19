import {SetVisibilityFilter} from '../actions'
const visibilityFilter = (state = 'ShowAll', action) => {
    switch (action.type) {
      case SetVisibilityFilter:
        return action.payload
      default:
        return state
    }
  }
export default visibilityFilter
  