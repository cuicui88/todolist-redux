import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
//引入了笔记本
import reducer from './reducer';
//创建管理员

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);
const store = createStore(reducer, enhancer);
export default store;