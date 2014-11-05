var React = require('react');
var cx = React.addons.classSet;
var Animation = require('./mixins/animation');
var transition = Animation();

module.exports = React.createClass({
    mixins: [transition],
    render: function () {
        var seq = this.props.seq;
        return <div className={'pt-page pt-page-' + seq}>
            <h1>You're on page {seq}</h1>
        </div>;
    }
});