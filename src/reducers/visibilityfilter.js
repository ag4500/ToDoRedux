import {SetVisibilityFilter} from '../actions'
const visibilityFilter = (state = 'ShowAll', action) => {
    switch (action.type) {
      case SetVisibilityFilter:
        return action.filter
      default:
        return state
    }
  }
export default visibilityFilter
  