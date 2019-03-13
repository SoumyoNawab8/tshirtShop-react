import { messageReducer } from './reducers/messageReducer';
import {createStore, combineReducers} from 'redux';
import { authenticateReducer } from './reducers/authenticateReduer';


const rootReducers=combineReducers({messageReducer,authenticateReducer})

export const store =createStore(rootReducers);