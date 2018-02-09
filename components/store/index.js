import { createStore } from 'redux';

import { pageReducer } from './page.js';

const store = createStore(pageReducer);

export default store;
export * from './page.js';