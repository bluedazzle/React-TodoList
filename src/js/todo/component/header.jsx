let React = require('react');

var Header = React.createClass({
    render: function(){
        return <header className="header">
            <h1>{this.props.title}</h1>
        </header>
    }
})

export default Header;