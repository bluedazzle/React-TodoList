let React = require('react');

var Footer = React.createClass({
    render: function(){
        let cs = {
            all: '',
            active: '',
            completed: ''
        };
        cs[this.props.type] = 'selected';
        return <footer className="footer">
                    <span className="todo-count">
                        <strong> {this.props.lefted} </strong> <span> </span> <span> items </span> <span> left </span>
                    </span>
                    <ul className="filters">
                        <li> <a href="#" className={cs.all} onClick={this.props.switchType.bind(null, 'all')}> All </a> </li>
                        <li> <a href="#active" className={cs.active} onClick={this.props.switchType.bind(null, 'active')}> Active </a> </li> 
                        <li> <a href="#completed" className={cs.completed} onClick={this.props.switchType.bind(null, 'completed')}> Completed </a> </li>
                    </ul>
                    <button className="clear-completed" onClick={this.props.clearCom.bind(null, '')}>
                        Clear completed
                    </button>
                </footer>
    }
})

export default Footer;