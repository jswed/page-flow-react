var React = require('react/addons');
var flow = require('./flow');
var Page1 = require('./page1');
var Page2 = require('./page2');

var Transition = React.addons.TransitionGroup;
module.exports = React.createClass({
    getInitialState: function(){
       return {
           index: 0
       };
    },
    next: function(dir) {
        this.state.index++;
        this.forceUpdate();
    },
    prev: function(dir) {
        this.state.index--;
        this.forceUpdate();
    },
    render: function () {
        var index = this.state.index;
        var Page = flow[index];
        return (
            <section>
                <Transition>{Page({key: index, seq: index+1})}</Transition>
                <div className ="pt-triggers">
                    <button className="pt-touch-button" disabled={index === 0} onClick={this.prev}>←</button>
                    <button className="pt-touch-button" disabled={index === flow.length - 1} onClick={this.next}>→</button>
                </div>
            </section>
            );
    }
});