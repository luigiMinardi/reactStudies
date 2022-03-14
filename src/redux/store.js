import { applyMiddleware, createStore } from 'redux'
import { save, load } from 'redux-localstorage-simple';
import reducer from './reducers';

const storeWithMiddleware = applyMiddleware(
    save({ states: ['hideFooter'] })
)(createStore);

const store = storeWithMiddleware(
    reducer,
    load({ states: ['hideFooter'] }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
        trace: true,
    })
)

export default store;