
var React = require('react');

var WeatherMessage = React.createClass({
    render: function(){
        var {location, temperature} = this.props;
        var url = `The temperature in ${location} is ${temperature}`;
        return (<div>
                <h3>{url}</h3>
            </div>
        );
    }
});

module.exports = WeatherMessage;