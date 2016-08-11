var React = require('react');
var ClickCounter = React.createClass({
    getInitialState: function() {
        return { numClick: 0 };
    },
    onClick: function() {
        this.setState({ numClick: this.state.numClick + 1 });
    },
    render: function() {
        return <div onClick={this.onClick}>{this.state.numClick} clicks </div>;
    },
});
module.exports = ClickCounter;
