import { pages, icons } from '../content/dummydata.js';

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

const loadHome = (home_info) => {
  return {
    action: LOAD_HOME,
    home_info
  }
}

// right panel click
export const changePage = (info) => {
  return {
    action: CHANGE_PAGE,
    page_info: info.page_info,
    cur_pano: info.cur_pano, 
    new_loaded_panos: info.loaded_panos
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
export const goToHome = () => {
  return {
    action: GO_TO_HOME
  };
}

export const toggleHide = () => {
  return {
    action: TOGGLE_HIDE
  }
}

export const changePageThunk = (page_id) => { // where: {page_id: page_info.id}
  const page = pages.filter((page) => page.id === page_id);
  const info = loadPageHelper(page);
  changePage(...info);
}

export const loadHomeThunk = () => { // { where: {isHome: true}}
  const home_page = pages.filter((page) => page.isHome === true);
  const info = loadPageHelper(home_page);
  loadHome({...info});
}

// takes the page to load information as argument
// gets the current pano
// adds the panos that need to load to loaded panos
// returns info
const loadPageHelper = (page) => {

  const cur_icon_id = page.left_icons[0];
  const cur_pano = icons.filter((icon) => icon.id === cur_icon_id);
  const loaded_panos = icons.filter((icon) => page.left_icons.indexOf(icon.id) !== -1);
  // TODO run function begin loading loaded_panos into browser cache -- if not already
  
  return { page, cur_pano, loaded_panos };
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