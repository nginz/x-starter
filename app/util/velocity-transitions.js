window.jQuery = window.$ = require('jquery');
var velocity = require('velocity-animate');
require('velocity-animate/velocity.ui');

$.Velocity.RegisterEffect("transition.rotateRightSlideOut", {
  defaultDuration: 900,
  calls: [
    [ { opacity: 0.5, transformOriginX: "50%", transformOriginY: "50%", scaleX: 0.5, scaleY: 0.5, translateZ: 0 }, 0.40 ],
    [ { opacity: 0, translateX: 200, translateZ: 0 }, 0.60]
  ],
  reset: { translateX: 0 }
});

$.Velocity.RegisterEffect("transition.rotateRightSlideIn", {
  defaultDuration: 700,
  calls: [
    [ { opacity: 0.5, translateX: [0, -200], scaleX: [0.5, 0.5], scaleY: [0.5, 0.5], translateZ: 0 }, 0.60],
    [ { opacity: 1, transformOriginX: "50%", transformOriginY: "50%", scaleX: 1, scaleY: 1, translateZ: 0 }, 0.30 ]
  ]
});

$.Velocity.RegisterEffect("transition.rotateLeftSlideOut", {
  defaultDuration: 900,
  calls: [
    [ { opacity: 0.5, transformOriginX: "50%", transformOriginY: "50%", scaleX: 0.5, scaleY: 0.5, translateZ: 0 }, 0.40 ],
    [ { opacity: 0, translateX: -200, translateZ: 0 }, 0.60]
  ],
  reset: { translateX: 0 }
});

$.Velocity.RegisterEffect("transition.rotateLeftSlideIn", {
  defaultDuration: 700,
  calls: [
    [ { opacity: 0.5, translateX: [0, 200], scaleX: [0.5, 0.5], scaleY: [0.5, 0.5], translateZ: 0 }, 0.60],
    [ { opacity: 1, transformOriginX: "50%", transformOriginY: "50%", scaleX: 1, scaleY: 1, translateZ: 0 }, 0.30 ]
  ]
});

module.exports = {}