var React = require('react');

var Counter = React.createClass({
  getDefaultProps: function(){
    return {
      count: 0
    };
  },
  getInitialState: function(){
    return {
      count: this.props.count
    };
  },
  increment: function(){
    this.setState({count: this.state.count + 1});
  },
  render: function(){
    return(
      <div onClick={this.increment}>
        Count: {this.state.count}
      </div>
    );
  }
});

module.exports = Counter;

