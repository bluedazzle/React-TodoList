let React = require('react');

var TodoItem = React.createClass({
    render: function(){
        var todo = this.props.data;
        var className = todo.completed ? 'completed': '';
        return <li className={className}>
                        <div className="view">
                            <input className="toggle" type="checkbox"
                            onClick={this.props.comTask}
                            checked={todo.completed}/> 
                            <label> {todo.title} </label>
                            <button ref="deleteTask" className="destroy" onClick={this.props.delTask}> </button>
                        </div>
                        <input type="text" className="edit" value={todo.title} />
                    </li>
    }
})

export default TodoItem;