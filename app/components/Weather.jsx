
var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var Weather = React.createClass({
    getDefaultProps:function () {
        return {
            location:'',
            temperature:0
        };
    },
    getInitialState: function () {
        return{
            location:this.props.location
        };
    },
    handleSearch: function (location) {
        var that = this;
        debugger;
        this.setState({isLoading:true});


        openWeatherMap.getTemp(location).then(function(temp){
            that.setState({
                location:location,
                temperature : temp,//temp
                isLoading:false
            });
        },function(errorMessage){
            that.setState({
                isLoading:false
            });
            alert("cant find city");

        });



    },
    render: function(){
        var {isLoading, location,temperature} = this.state;
        function renderMessage(){
            if(isLoading){
                return <h3>Fetching weather...</h3>
            }else if(temperature && location){
                return <WeatherMessage location={location} temperature={temperature}/>;
            }
        }
        return (<div>
            <WeatherForm onNewData={this.handleSearch}></WeatherForm>
            {renderMessage()}
        </div>);
    }

});

module.exports = Weather;