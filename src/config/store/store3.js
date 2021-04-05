import {createStore, applyMiddleware, compose} from 'redux';
// import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import { composeWithDevTools } from 'redux-devtools-extension';
// import AsyncStorage from '@react-native-community/async-storage';
import createSagaMiddleware from 'redux-saga';
// import saga from '../sagas';
import saga from './rootSaga';
// import logger from 'redux-logger';
// import rootReducer from '../reducers';
import rootReducer from './rootReducer';
import {persistStore, persistReducer} from 'redux-persist';
import localStorage from 'redux-persist/es/storage';
 
//redux persister middleware config
const persistConfig = {
 key: 'root',
 storage: 
 localStorage,
 //whitelist: [] 
 //save specific reducers
};
 
const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
const middlewares = [
 sagaMiddleware,
 // __DEV__ && logger
]; //add multiple middleware in array
 
// const composer = __DEV__ ? composeWithDevTools : compose;
// let store = createStore(persistedReducer,composer(applyMiddleware(...middlewares),
// // other store enhancers if any
// ),);
// sagaMiddleware.run(saga);
// const persistor = persistStore(store);
const store = createStore(
    persistedReducer,
    composeWithDevTools(
      applyMiddleware(...middlewares),
      // other store enhancers if any
    )
  );
  sagaMiddleware.run(saga);
  const persistor = persistStore(store);

export {store, persistor};