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
  hide: { value: false},
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
    page: info.page,
    cur_pano_info: info.cur_pano_info,
    new_loaded_panos: info.loaded_panos
  };
}

// left panel click
export const changePano = (pano_info) => {
  return {
    type: CHANGE_PANO,
    pano_info
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
  const page = pages.filter((page) => page.id === page_id)[0];
  const info = loadPageHelper(page);
  dispatch(changePage(...info));
}

export const loadHomeThunk = () => (dispatch) => { // { where: {isHome: true}}
  const home_page = pages.filter((page) => page.isHome === true)[0];
  const info = loadPageHelper(home_page);
  dispatch(loadHome({ ...info }));
}

// argument: page to load information
// add new panos to loaded_panos
// add pano information into page left_icons array
// gets the current pano
// returns info
const loadPageHelper = (page) => {

  // add new panos to loaded_panos
  let loaded_panos = icons.filter((icon) => (page.left_icons.indexOf(icon.id) !== -1));

  // add pano information into page left_icons array
  const loaded_left_icons = page.left_icons.map(cur_id => loaded_panos.filter(cur => cur_id === cur.id)[0]);
  page.left_icons = loaded_left_icons;
  
  // add icon_thumbnail property to each right_icon
  const loaded_right_icons = page.right_icons.map(right_icon => {
    const current_icon = icons.filter(cur => right_icon.icon_id === cur.id)[0];
    const current_icon_thumbnail = current_icon.thumbnail_img;
    right_icon.icon_thumbnail = current_icon_thumbnail;
    return right_icon;
  });
  page.right_icons = loaded_right_icons;

  // current pano defaults to the first left icon
  const cur_pano_info = page.left_icons[0];

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
        page: action.page,
        cur_pano_info: action.cur_pano_info,
        loaded_panos: action.new_loaded_panos
      });

    case CHANGE_PANO:
      return Object.assign({}, state, {
        cur_pano_info: action.pano_info
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