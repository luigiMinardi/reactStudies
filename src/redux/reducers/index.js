import { combineReducers } from 'redux';

import hideFooter from './hideFooter.reducer';

const rootReducer = combineReducers({
    hideFooter,
});

export default rootReducer;