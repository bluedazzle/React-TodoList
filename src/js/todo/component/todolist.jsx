let React = require('react');
import TodoItem from './todoitem.jsx';

var TodoList = React.createClass({
    render: function(){
        return <ul className="todo-list">
            {this.props.todos.map(function(todo, i){
                switch (this.props.type){
                    case 'all' :
                        return <TodoItem data={todo} key={i} delTask={this.props.delTask(i)} comTask={this.props.comTask(i)}></TodoItem>;
                    case 'active' :
                        if(!todo.completed){
                            return <TodoItem data={todo} key={i} delTask={this.props.delTask(i)} comTask={this.props.comTask(i)}></TodoItem>;
                        }
                        break;
                    case 'completed' :
                        if(todo.completed){
                            return <TodoItem data={todo} key={i} delTask={this.props.delTask(i)} comTask={this.props.comTask(i)}></TodoItem>;
                        }
                        break;
                    default :
                        break;
                }
                
            }.bind(this)) }
        </ul>
    }
})

export default TodoList;