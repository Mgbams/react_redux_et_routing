import * as actions from '../actionTypes/actionTypes';

export function bugAdded(description) {
    return {
        type: actions.BUG_ADDED,
        payload: {
          description
        }
      }
}

export function bugRemoved(id) {
    return {
        type: actions.BUG_REMOVED,
        payload: {
          id
        }
      }
}

export const bugResolved = (id) => ({
        type: actions.BUG_RESOLVED,
        payload: {
          id
        }
})