import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares)); 
//spread all the middlewares in individual arguments for the applyMiddleware functione
const persistor = persistStore(store);

export { store, persistor };