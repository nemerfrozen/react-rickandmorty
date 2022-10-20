// create store redux
import { configureStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const store = configureStore(
    reducer,
    applyMiddleware(thunk)
);


export default store;

