var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
// var Velocity = require('velocity-animate');
require('../util/velocity-transitions');

var VelocityTransitionGroupChild = React.createClass({
  propTypes: {
    transitionName: React.PropTypes.string.isRequired,
  },
  _getTransition: function() {
    if (!transitions[this.props.transitionName]) {
      console.warn('TransitionName ' + this.props.transitionName + ' wasn\'t found in VelocityTransitionGroupChild transitions.');
    }
    return transitions[this.props.transitionName] || transitions.default;
  },

  componentWillEnter: function(done) {
    var node = this.getDOMNode();
    var transition = "transition.rotateRightSlideIn";
    $(node).velocity(
      transition,
      {
        complete: done
      });
  },

  componentWillLeave: function(done) {
    var node = this.getDOMNode();
    var transition = "transition.rotateRightSlideOut";
    $(node).velocity(
      transition,
      {
        complete: done
      });
  },

  render: function() {
    return React.Children.only(this.props.children);
  }
});

var VelocityTransitionGroup = React.createClass({
  propTypes: {
    TransitionName: React.PropTypes.string.isRequired,
  },

  _wrapChild: function(child) {
    return (
      <VelocityTransitionGroupChild
        transitionName={this.props.transitionName}
        >
        {child}
      </VelocityTransitionGroupChild>
    );
  },

  render: function() {
    return (
      <ReactTransitionGroup
        {...this.props}
        childFactory={this._wrapChild}
        />
    );
  }
});

module.exports = VelocityTransitionGroup;