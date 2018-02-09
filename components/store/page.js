const CHANGE_PAGE = 'CHANGE_PAGE';
const CHANGE_PANO = 'CHANGE_PANO';
const GO_TO_HOME = 'GO_TO_HOME';
const TOGGLE_HIDE = 'TOGGLE_HIDE';
const LOAD_HOME = 'LOAD_HOME';

let initial_state = {
  page: {},
  cur_pano: {},
  loaded_panos: [], // possibly have panos already loaded and just concatenate the additional ones
  hide: false,
  home: {
    page: {},
    cur_pano: {},
    loaded_panos: [],
  }
}

export const loadHome = (home_info) => {
  return {
    action: LOAD_HOME,
    home_info
  }
}

// right panel click
export const changePage = (page_info, cur_pano, new_loaded_panos) => {
  // load page_info
  // get page_info.left_icons[0].(filter for icon_id).pano_img) -- too inefficient?
  return {
    action: CHANGE_PAGE,
    page_info,
    cur_pano,
    new_loaded_panos
  };
}

// left panel click
export const changePano = (pano_id) => {
  return {
    action: CHANGE_PAGE,
    pano_id
  };
}

// resets to initial state
export const changePano = () => {
  return {
    action: GO_TO_HOME
  };
}

export const toggleHide = () => {
  return {
    action: TOGGLE_HIDE
  }
}

export function pageReducer(state = initial_state, action) {
  switch (action.type) {
    case LOAD_HOME:
      return Object.assign({}, state, { 
        page: action.home_info.page, 
        cur_pano: action.home_info.cur_pano, 
        loaded_panos: action.home_info.loaded_panos,
        home: action.home_info
      });
    case CHANGE_PAGE:
      return Object.assign({}, state, { 
        page: action.page_info, 
        cur_pano: action.cur_pano, 
        loaded_panos: action.new_loaded_panos 
      });
    case CHANGE_PANO:
      return Object.assign({}, state, { 
        cur_pano: state.loaded_panos.filter((pano) => action.pano_id === pano.id) 
      });
    case TOGGLE_HIDE:
      return Object.assign({}, state, { 
        hide: !state.hide
      });
    default:
      return state;
  }
}

export default { pageReducer };