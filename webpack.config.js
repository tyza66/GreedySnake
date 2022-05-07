const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        environment:{
            arrowFunctions: false
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [[
                                "@babel/preset-env",
                                {
                                    targets: {
                                        "chrome":"88"
                                    },
                                    "corejs":"3",
                                    "useBuiltIns":"usage"
                                }
                            ]]
                        }
                    },
                    'ts-loader'
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin(
            {
                template: './src/index.html'
            }
        )
    ],
    resolve: {
        extensions: ['.ts', '.js']
    }
}