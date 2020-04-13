import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import Students from './students/reducer';

const initialState = {};

const composeEnhancers = typeof window === 'object' && (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

const rootReducer = combineReducers({
  Students
});

export default createStore(
  rootReducer,
  initialState,
  enhancer
);