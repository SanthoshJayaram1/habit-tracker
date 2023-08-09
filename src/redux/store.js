import { createStore, combineReducers } from 'redux';
import habitReducer from './reducers';

const rootReducer = combineReducers({
  habits: habitReducer,
});

const store = createStore(rootReducer);
export default store;