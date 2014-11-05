/** @jsx React.DOM */
var React = require('react/addons');
var $ = require('jquery');

module.exports = function (options) {
    var ANIMATE_END = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    var cx = React.addons.classSet;

    function transitionClassName(spec, type) {
        return spec[type] === 'string' ? spec[type] : cx(spec[type]);
    }
    
    var spec = {
        propTypes: {
          transtion: React.PropTypes.object
        },
        animateEnd: function (next) {
            var enterCls = transitionClassName(this.props.transition, 'enter');
            var leaveCls = transitionClassName(this.props.transition, 'leave');
            // removed all applied class for transition/animation.
            $(this.getDOMNode()).removeClass([enterCls, leaveCls].join(' '));
            next();
        }
    };

    spec.componentWillEnter = function (done) {
        var enterCls = transitionClassName(this.props.transition, 'enter');
        if (enterCls) {
            console.log("enter as:", enterCls);
            $(this.getDOMNode()).addClass(enterCls).one(ANIMATE_END,
                this.animateEnd.bind(this, done));
        }
    };

    spec.componentWillLeave = function (done) {
        var leaveCls = transitionClassName(this.props.transition, 'leave');
        if (leaveCls) {
            console.log("leave as:", leaveCls);
            $(this.getDOMNode()).addClass(leaveCls).one(ANIMATE_END,
                this.animateEnd.bind(this, done));
        }
    }

    return spec;
}
