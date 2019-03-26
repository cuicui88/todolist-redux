import {createStore,applyMiddleware,compose} from 'redux';
//引入了笔记本
import reducer from './reducer';
//创建管理员
import createSagaMiddleware from 'redux-saga';
import TodoSagas from './sagas';
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(reducer, enhancer);
sagaMiddleware.run(TodoSagas);
export default store;