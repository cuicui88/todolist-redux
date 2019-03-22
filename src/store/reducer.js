import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './actionTypes';

const defaultState={
    inputValue:'',
    list:[]
}
//state是整个笔记本里的数据，现在是一个空对象
//reducer可以接收state，但是绝不能修改state，所以要将其拷贝
export default (state=defaultState,action)=>{
    if(action.type===CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type===ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue='';
        return newState;
    }
    if(action.type===DELETE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    return state;
}