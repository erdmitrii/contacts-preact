let path = require('path');

module.exports = {
    context: path.join(__dirname, '/src'),
    entry: {
        bundle: './app',
    },
    output: {
        path: __dirname + '/js',
        filename: 'bundle.js'
    },
    watch: true,
    devtool: '#inline-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'stage-0'],
                    plugins: [
                        ['transform-react-jsx', { 'pragma':'h' }]
                    ]
                }
            }
        ]
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.jsx', '.js']
    },
    resolveLoader: {
        modules: ['node_modules'],
        extensions: ['.js']
    }
};
