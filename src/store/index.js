import {createStore} from 'redux';
//引入了笔记本
import reducer from './reducer';
//创建管理员
const store = createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   );

export default store;