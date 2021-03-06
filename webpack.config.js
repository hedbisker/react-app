/**
 * Created by hedbi on 04/27/2017.
 */

var webpack = require('webpack');
module.exports = {
    entry:[
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.jsx'
    ],
    external:{
        jquery:'jQuery',
    },
    plugin:[
        new webpack.ProvidePlugin({
            '$':'jquery',
            'jQuery':'jquery'
        })
    ],
    output:{
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve:{
        root: __dirname,
        alias:{
            Main:'app/components/Main.jsx',
            Nav:'app/components/Nav.jsx',
            Weather:'app/components/Weather.jsx',
            About:'app/components/About.jsx',
            Examples:'app/components/Examples.jsx',
            WeatherForm:'app/components/WeatherForm.jsx',
            WeatherMessage:'app/components/WeatherMessage.jsx',
            openWeatherMap:'app/apis/openWeatherMap.jsx'
        },
        extensions:['','.js','.jsx']
    },
    module:{
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|brwer_components)/
            }
        ]
    },
    devtool:'cheep-module-eval-source-map'
};