import { combineReducers } from 'redux';
import marvelReducer from './marvel/marvel.slice';

const rootReducer = combineReducers({
      marvel: marvelReducer,
});

export default rootReducer;