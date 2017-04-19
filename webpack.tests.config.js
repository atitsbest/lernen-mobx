const glob = require('glob');

const entries = {};
let files = [];

files = files.concat(glob.sync("./app/**/*.specs.ts*"));

files.forEach(file => {
    let name = file.match("\.\/app(.+\/[^\/]+)\.tsx?")[1];
    entries[name] = file;
})

module.exports = {
    entry: entries,
    output: {
        filename: '[name].js',
        path: __dirname + '/.tmp'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader'
        }]
    },
    resolve: {
        modules: [
            __dirname + '/app',
            __dirname + '/node_modules'
        ],
        extensions: ['.tsx', '.ts', '.js']
    },
    devtool: 'source-map',
    node: {
        child_process: 'empty',
        fs: 'empty'
    },
    externals: {
        'jsdom': 'window',
        'react/lib/ReactContext': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/addons': true
    }
}