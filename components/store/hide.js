import { pages, icons } from '../content/dummydata.js';

const TOGGLE_HIDE = 'TOGGLE_HIDE';

let initial_state = {
  hide: false,
}

export const toggleHide = () => {
  return {
    type: TOGGLE_HIDE
  }
}

export default function (state = initial_state, action) {
  switch (action.type) {

    case TOGGLE_HIDE:
      return Object.assign({}, state, {
        hide: !state.hide
      });

    default:
      return state;
  }
}