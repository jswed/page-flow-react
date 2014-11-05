var React = require('react/addons');
var flow = require('./flow');
var Page1 = require('./page1');
var Transition = React.addons.TransitionGroup;

module.exports = React.createClass({
    getInitialState: function(){
       return {
           index: 0,
           pageTransition: {
               leave: 'pt-page-rotateCubeLeftOut pt-page-ontop',
               enter: 'pt-page-rotateCubeLeftIn'
           }
       };
    },
    next: function(dir) {
        this.setState({
            index: this.state.index + 1
        });
    },
    prev: function(dir) {
        this.setState({
            index: this.state.index -1
        });
    },
    componentWillUpdate: function (nextProps, nextState) {
       if(nextState){
           nextState.dir = nextState.index > this.state.index? 'rtl':'ltr';
       }
    },
    render: function () {
        var index = this.state.index;
        var transit = this.state.pageTransition;
        var dir = this.state.dir;

        if(dir === 'ltr'){
            transit.leave = transit.leave.replace('Left', 'Right');
            transit.enter = transit.enter.replace('Left', 'Right');
        } else if( dir === 'rtl') {
            transit.leave = transit.leave.replace('Right', 'Left');
            transit.enter = transit.enter.replace('Right', 'Left');
        }

        return (
            <section>
                <Transition>
                    <Page1 key={index} seq={index+1} transition={transit}/>
                </Transition>
                <div className ="pt-triggers">
                    <button className="pt-touch-button" disabled={index === 0} onClick={this.prev}>←</button>
                    <button className="pt-touch-button" disabled={index === flow.length - 1} onClick={this.next}>→</button>
                </div>
            </section>
            );
    }
});