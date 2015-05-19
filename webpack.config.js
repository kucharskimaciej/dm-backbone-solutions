var glob = require('glob');

var tasks, entries;
tasks = glob.sync("task-[0-9].[0-9]");

entries = tasks.reduce(function(obj, curr) {
    obj[curr] = './' + curr + '/main.es6.js';

    return obj;
}, {});

module.exports = {
    entry: entries,
    output: {
        filename: './[name]/main.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: {
                modules: 'amd'
            }}
        ]
    },
    node: {
        fs: "empty"
    }
};