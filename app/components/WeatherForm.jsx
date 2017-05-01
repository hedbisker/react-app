
var React = require('react');

var WeatherForm = React.createClass({

    onSearch: function (e) {
        e.preventDefault();
        var location = this.refs.location.value;
        if(location.length>0){
            this.refs.location.value = '';
            this.props.onNewData(location);
        }
        else{
            alert("This location is not exist")
        }
    },
    render: function(){
        return (<div>
            <form onSubmit={this.onSearch}>
                <h1>Get Weather</h1>
                <input type="text" placeholder="Enter city name" ref="location"> </input>
                <button>Submit</button>
            </form>
        </div>);
    }
});
module.exports = WeatherForm;