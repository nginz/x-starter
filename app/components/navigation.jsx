var React = require('react/addons');
var VelocityTransitionGroup = require('./velocity_transition_group');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var Navigation = React.createClass({
  getInitialState: function(){
    return {
      i: 0,
      activeChild: this.props.children[0]
    }
  },
  render: function(){
    return (
      <VelocityTransitionGroup transitionName={this.props.transitionName} transitionAppear={true} onClick={this.unmount}>
        {this.state.activeChild}
      </VelocityTransitionGroup>
    );
  },

  unmount: function(){
    var i = this.state.i = (this.state.i + 1) % this.props.children.length;
    this.state.activeChild = this.props.children[i];
    this.setState(this.state);
  }
});

var NavigationPage = React.createClass({
  render: function(){
    return (
      <div className='view-pane'>
        {this.props.children}
      </div>
    );
  }
});

module.exports = {Navigation, NavigationPage}