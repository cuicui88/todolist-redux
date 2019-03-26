import React, {Component} from 'react';
import 'antd/dist/antd.css';


import store from './store/index.js';
import {getInputChangeAction,getAddItemAction,getDeleteItemAction,getTodolist} from './store/actionCreator';
import TodolistUI from './TodolistUI';
class Todolist extends Component{
    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this); 
        this.handleItemDelete = this.handleItemDelete.bind(this);       
        store.subscribe(this.handleStoreChange);//??store
    }
    render(){
        return( 
            <TodolistUI 
                inputValue={this.state.inputValue}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                list={this.state.list}
                handleItemDelete = {this.handleItemDelete}
            />
        )
    }
    componentDidMount(){
        const action = getTodolist();
        store.dispatch(action);
    }
    handleInputChange(e){
        const action=getInputChangeAction(e.target.value);
        store.dispatch(action);
    }
    handleStoreChange(){
        this.setState(store.getState());
    }
    handleBtnClick(){
        const action=getAddItemAction();
        store.dispatch(action);
    }
    handleItemDelete(index){
        const action=getDeleteItemAction(index);
        store.dispatch(action);
    }
}

export default Todolist;