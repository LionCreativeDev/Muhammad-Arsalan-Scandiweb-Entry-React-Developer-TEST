import reducer from './reducer';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const store = createStore(reducer, {}, applyMiddleware(thunk));

export default store;

//to save store in global variable, this variable can be accessed from any javascript file
//https://medium.com/@tom64.jefferson/how-to-dispatch-redux-action-from-external-javascript-code-f5238f8bd222
//https://stackoverflow.com/questions/44505262/calling-action-from-ouside-of-redux
// if (!window.store) {
//     // apply singleton design pattern
//     window.store = createStore(reducer, {}, applyMiddleware(thunk));
// }
// export default window.store;