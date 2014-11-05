var React = require('react/addons');
var flow = require('./flow');
var Page1 = require('./page1');
var Menu = require('./menu');
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
    switchTransition: function (nextTransit) {
        console.info('new transi', nextTransit);
        this.setState({
            pageTransition: nextTransit
        });
        this.next();
    },
    render: function () {
        var index = this.state.index;
        var transit = this.state.pageTransition;
        var dir = this.state.dir;

        if (dir === 'ltr') {
            transit.leave = transit.leave.replace('Left', 'Right');
            transit.enter = transit.enter.replace('Left', 'Right');
        } else if (dir === 'rtl') {
            transit.leave = transit.leave.replace('Right', 'Left');
            transit.enter = transit.enter.replace('Right', 'Left');
        }

        return (
            <section>
                <Transition>
                    <Page1 key={index} seq={index + 1} transition={transit}/>
                </Transition>
                <div className ="pt-triggers">
                    <button className="pt-touch-button" disabled={index === 0} onClick={this.prev}>←</button>
                &nbsp;
                    <button className="pt-touch-button" disabled={index === 5} onClick={this.next}>→</button>
                    <Menu onChange={this.switchTransition} />
                </div>
            </section>
            );
    }
});