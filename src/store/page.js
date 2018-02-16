import { pages, icons } from '../content/dummydata.js';

const CHANGE_PAGE = 'CHANGE_PAGE';
const CHANGE_PANO = 'CHANGE_PANO';

let initial_state = {
  page: {},
  cur_pano_info: {},
}

// right panel click
const changePage = (info) => {
  return {
    type: CHANGE_PAGE,
    page: info.page,
    cur_pano_info: info.cur_pano_info,
  };
}

// left panel click
export const changePano = (pano_info) => {
  return {
    type: CHANGE_PANO,
    pano_info
  };
}

export const changePageThunk = (page_id) => (dispatch) => { // where: {page_id: page_info.id}
  const page = pages.filter((page) => page.id === page_id)[0];
  const info = loadPageHelper(page);
  dispatch(changePage({ ...info }));
}

export const loadHomeThunk = () => (dispatch) => { // { where: {isHome: true}}
  const home_page = pages.filter((page) => page.isHome === true)[0];
  const info = loadPageHelper(home_page);
  dispatch(changePage({ ...info }));
}

// argument: page to load information
// add pano information into page left_icons array
// gets the current pano
// returns info
const loadPageHelper = (page) => {
  
  const ret_page = Object.assign({}, page);
  
  // add pano information into ret_page left_icons array
  const loaded_left_icons = ret_page.left_icons.map(cur_id => icons.filter(cur => cur_id === cur.id)[0]);
  ret_page.left_icons = loaded_left_icons;

  // add icon_thumbnail property to each right_icon
  const loaded_right_icons = ret_page.right_icons.map(right_icon => {
    const current_icon = icons.filter(cur => right_icon.icon_id === cur.id)[0];
    const current_icon_thumbnail = current_icon.thumbnail_img;
    right_icon.icon_thumbnail = current_icon_thumbnail;
    return right_icon;
  });
  ret_page.right_icons = loaded_right_icons;

  // current pano defaults to the first left icon
  const cur_pano_info = ret_page.left_icons[0];
  return { page: ret_page, cur_pano_info };
}

export default function (state = initial_state, action) {
  switch (action.type) {

    case CHANGE_PAGE:
      // if new right_icons are empty, render previous right_icons
      if (action.page.right_icons.length === 0) {
        action.page.right_icons = state.page.right_icons;
      }

      // if same page click default to 1st left pano
      if (action.page.id === state.page.id) {
        return Object.assign({}, state, {
          cur_pano_info: action.cur_pano_info,
        });
      }

      return Object.assign({}, state, {
        page: action.page,
        cur_pano_info: action.cur_pano_info,
      });

    case CHANGE_PANO:
      return Object.assign({}, state, {
        cur_pano_info: action.pano_info
      });

    default:
      return state;
  }
}