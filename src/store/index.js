import {createStore, combineReducers, applyMiddleware} from "redux";
// import {cashReduser} from './cashReduser';
import {cardReduser} from './cardReduser';
import { boarderReduser } from './boarderReduser';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReduser =combineReducers({
     // cash: cashReduser,
     cards: cardReduser,
     
    


});

export const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)));