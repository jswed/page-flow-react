var React = require('react/addons');
var flow = require('./flow');
var Page1 = require('./page1');
var Transition = React.addons.TransitionGroup;

module.exports = React.createClass({
    getInitialState: function(){
       return {
           index: 0,
           pageTransition: {
               leave: {
                   'pt-page-rotateCubeLeftOut': 1,
                   'pt-page-ontop': 1
               },
               enter: {
                   'pt-page-rotateCubeLeftIn': 1
               }
           }
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
        return (
            <section>
                <Transition>
                    <Page1 key={index} seq={index+1} transition={this.state.pageTransition}/>
                </Transition>
                <div className ="pt-triggers">
                    <button className="pt-touch-button" disabled={index === 0} onClick={this.prev}>←</button>
                    <button className="pt-touch-button" disabled={index === flow.length - 1} onClick={this.next}>→</button>
                </div>
            </section>
            );
    }
});