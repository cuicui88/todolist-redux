import {takeEvery,put} from 'redux-saga/effects';
import {GET_INIT_LIST} from './actionTypes';
import {initListAction} from './actionCreator';
import axios from 'axios';
//generetor函数
function* getInitList(){
    try {
        const res = yield axios.get('/api/todolist');
        const action = initListAction(res.data);
        yield put(action);//将acyion派发给store
    }catch(e){
        console.log("网络请求失败");
    }
    
    // axios.get('/api/todolist').then((res)=>{
    //     const data = res.data;
    //     const action = initListAction(data);
    //     put(action);
    // });
}
function* mySaga() {
    //接收到GET_INIT_LIST这个类型的action，执行getInitList这个方法
    yield takeEvery(GET_INIT_LIST, getInitList);
    
}

export default mySaga;