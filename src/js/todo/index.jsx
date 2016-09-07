import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './component/footer.jsx';
import Header from './component/header.jsx';
import TodoList from './component/todolist.jsx';

var todolist = {
            name: "todos",
            todos: [{
                completed: false,
                title: 'finish exercise'
            }, {
                completed: false,
                title: 'lean jsx'
            }, {
                completed: true,
                title: 'lean react'
            }]
        };


var App = React.createClass({
    getInitialState: function(){
        return {
        listTitle: '',
        todolist: todolist,
        type: 'all'
        }
    },
    changeHandel: function(event){
        this.setState({value: event.target.value});
    },
    addTaskHandel: function(){
        let task = this.refs.addTask;
        if(task.value === ''){
            return false;
        }
        let todo = {
                            completed: false,
                            title: task.value
                        };
        let todos = this.state.todolist.todos;
        todos.push(todo);
        this.setState(todos);
        task.value = '';
    },
    delTaskHandel: function(index){
        return () => {
            let todos = this.state.todolist.todos;
            todos.splice(index, 1);
            this.setState(todos);
        }
    },
    comTaskHandel: function(index){
        return () => {
            let todos = this.state.todolist.todos;
            todos[index].completed = !todos[index].completed;
            this.setState(todos);
        }
    },
    clearCompleteHandel: function(){
        let todolist = this.state.todolist;
        let todos = todolist.todos.filter(function(todo){
            return !todo.completed;
        })
        todolist.todos = todos;
        this.setState(todolist);
    },
    switchTypeHandel: function(type){
        this.setState({type: type});
    },
    render: function(){
        let todos = this.state.todolist.todos;
        let lefted = todos.reduce(function(prev, next){
            return next.completed ? prev : prev + 1;
        }, 0);
        let footer = todos.length ? <Footer lefted={lefted} type={this.state.type}
        switchType={this.switchTypeHandel}
        clearCom={this.clearCompleteHandel}/> : '';
        return <div ref='app'>
            <Header title={todolist.name}></Header>
            <div className="add-taskItem-box">
                                    <input ref="addTask" className="new-todo" 
                                    placeholder="What needs to be done?" 
                                    defaultValue={this.state.listTitle} 
                                    onChange={this.changeHandel}/> 
                                    <button className="add-taskItem" onClick={this.addTaskHandel}>Add</button>
                                </div>
            <TodoList todos={todolist.todos} type={this.state.type} delTask={this.delTaskHandel} comTask={this.comTaskHandel}></TodoList>
            {footer}
        </div>
    }
});

ReactDOM.render(
    <App/>,
    document.getElementById('AppRoot')
)