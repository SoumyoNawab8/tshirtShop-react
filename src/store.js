import { messageReducer } from './reducers/messageReducer';
import {createStore} from 'redux';


export const store =createStore(messageReducer);