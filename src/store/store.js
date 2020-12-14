import { combineReducers, createStore, applyMiddleware } from "redux";
import languageReducer from './languages/reducer'
import roomsReducer from './rooms/reducer'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({
    language: languageReducer,
    room: roomsReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;