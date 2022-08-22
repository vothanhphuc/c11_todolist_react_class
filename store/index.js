import { combineReducers, createStore } from 'redux';
import mayLanhReducer from './reducers/mayLanhReducer';

const reducer = combineReducers({
	mayLanh: mayLanhReducer
});

const store = createStore(reducer);

export default store;
