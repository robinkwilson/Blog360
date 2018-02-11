import { pages, icons } from '../content/dummydata.js';

const CHANGE_PAGE = 'CHANGE_PAGE';
const CHANGE_PANO = 'CHANGE_PANO';
const GO_TO_HOME = 'GO_TO_HOME';
const TOGGLE_HIDE = 'TOGGLE_HIDE';
const LOAD_HOME = 'LOAD_HOME';

let initial_state = {
  page: {},
  cur_pano_info: {},
  loaded_panos: [], // possibly have panos already loaded and just concatenate the additional ones
  hide: false,
  home: {
    page: {},
    cur_pano_info: {},
    loaded_panos: [],
  }
}

const loadHome = (home_info) => {
  return {
    type: LOAD_HOME,
    ...home_info
  }
}

// right panel click
const changePage = (info) => {
  return {
    type: CHANGE_PAGE,
    page_info: info.page_info,
    cur_pano_info: info.cur_pano_info,
    new_loaded_panos: info.loaded_panos
  };
}

// left panel click
export const changePano = (pano_id) => {
  return {
    type: CHANGE_PAGE,
    pano_id
  };
}

// resets to initial state
export const goToHome = () => {
  return {
    type: GO_TO_HOME
  };
}

export const toggleHide = () => {
  return {
    type: TOGGLE_HIDE
  }
}

export const changePageThunk = (page_id) => (dispatch) => { // where: {page_id: page_info.id}
  const page = pages.filter((page) => page.id === page_id);
  const info = loadPageHelper(page);
  dispatch(changePage(...info));
}

export const loadHomeThunk = () => (dispatch) => { // { where: {isHome: true}}
  const home_page = pages.filter((page) => page.isHome === true)[0];
  const info = loadPageHelper(home_page);
  dispatch(loadHome({ ...info }));
}

// takes the page to load information as argument
// gets the current pano
// adds the panos that need to load to loaded panos
// returns info
const loadPageHelper = (page) => {
  const cur_icon_id = page.left_icons[0];
  const cur_pano_info = icons.filter((icon) => icon.id === cur_icon_id)[0];
  const loaded_panos = icons.filter((icon) => page.left_icons.indexOf(icon.id) !== -1);
  // TODO run function begin loading loaded_panos into browser cache -- if not already
  return { page, cur_pano_info, loaded_panos };
}

export function pageReducer(state = initial_state, action) {
  switch (action.type) {

    case LOAD_HOME:
      return Object.assign({}, state, {
        page: action.page,
        cur_pano_info: action.cur_pano_info,
        loaded_panos: action.loaded_panos,
        home: {
          page: action.page,
          cur_pano_info: action.cur_pano_info,
          loaded_panos: action.loaded_panos,
        }
      });

    case CHANGE_PAGE:
      return Object.assign({}, state, {
        page: action.page_info,
        cur_pano_info: action.cur_pano_info,
        loaded_panos: action.new_loaded_panos
      });

    case CHANGE_PANO:
      return Object.assign({}, state, {
        cur_pano_info: state.loaded_panos.filter((pano) => action.pano_id === pano.id)
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