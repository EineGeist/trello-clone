import { Store, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { AppState, AllActions } from './types';
import { loadState } from './localStorage';
import rootReducer from './rootReducer';

const middleware = [ReduxThunk];

const store: Store<AppState, AllActions> = createStore(
  rootReducer,
  loadState(),
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
