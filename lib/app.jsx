var React = require('react/addons');
var Menu = require('./menu');
var Page = require('./page');
var Transition = React.addons.TransitionGroup;

var REGEX_BACK = /(?!From)(\w*?)(Left|Top|Up)/;
var REGEX_FORWARD = /(?!From)(\w*?)(Right|Bottom|Down)/;

var REVERSE = {
    'Left':'Right',
    'Right':'Left',
    'Top':'Bottom',
    'Bottom': 'Top',
    'Up': 'Down',
    'Down':'Up'
};

function inverse(match, keep, dir) {
    return keep + (REVERSE[dir] || dir);
}

module.exports = React.createClass({
    getInitialState: function(){
       return {
           index: 1,
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
           nextState.dir = nextState.index > this.state.index? 'forward':'back';
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

        if (dir === 'forward') {
            var leave = transit.leave;
            transit.leave = transit.leave.replace(REGEX_BACK, inverse);
            transit.enter = transit.enter.replace(REGEX_BACK, inverse);
        } else if (dir === 'back') {
            transit.leave = transit.leave.replace(REGEX_FORWARD, inverse);
            transit.enter = transit.enter.replace(REGEX_FORWARD, inverse);
        }

        return (
            <section className="pt-perspective">
                <Transition>
                    <Page key={index} seq={index} transition={transit}/>
                </Transition>
                <div className ="pt-triggers">
                    <button className="pt-touch-button" onClick={this.prev}>←</button>
                &nbsp;
                    <button className="pt-touch-button" onClick={this.next}>→</button>
                    <Menu onChange={this.switchTransition} />
                </div>
            </section>
            );
    }
});