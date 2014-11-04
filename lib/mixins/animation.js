/** @jsx React.DOM */
var React = require('react/addons');
var $ = require('jquery');

module.exports = function (options) {
    var ANIMATE_END = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    var cx = React.addons.classSet;
    var enterCls = typeof options.enter === 'string'
        ? options.enter
        : cx(options.enter);
    var leaveCls = typeof options.leave === 'string'
        ? options.leave
        : cx(options.leave);
    var spec = {
        animateEnd: function (next) {
            // removed class for transition/animation.
            $(this.getDOMNode()).removeClass([enterCls, leaveCls].join(' '));
            next();
        }
    };


    if (enterCls) {
        spec.componentWillEnter = function (done) {
            $(this.getDOMNode()).addClass(enterCls).one(ANIMATE_END,
                this.animateEnd.bind(this, done));
        };
    }

    if (leaveCls) {
        spec.componentWillLeave = function (done) {
            $(this.getDOMNode()).addClass(leaveCls).one(ANIMATE_END,
                this.animateEnd.bind(this, done));
        }
    }

    return spec;
}
