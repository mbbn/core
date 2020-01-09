const path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => ({
    entry: [
        './src/main/ts/index.tsx'
        /* Uncomment for custom js import with 'require':
        './src/main/ts/public/custom.js'
         */
    ],

    output: {
        filename: argv.mode === 'development' ? 'bundle.js' : 'dist/[chunkhash].[name].bundle.js',
        path: __dirname + '/build/webpack'
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: { // It is an alternative to TsConfigPathsPlugin (for not depending to another library):
        }
    },

    // See: https://www.typescriptlang.org/docs/handbook/react-&-webpack.html
    module: {
        rules: [
            {
                test: /\.tsx?$/, // '.ts' or '.tsx' files
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: false,
                            plugins: argv.mode === 'development' ? [
                                'react-hot-loader/babel'
                                /*, '@babel/plugin-syntax-dynamic-import'*/ // Dynamic imports does not work properly with react-hot-loader.
                            ] : [
                                '@babel/plugin-syntax-dynamic-import' // Support dynamic import for React.lazy() in ViewName.
                            ],
                        },
                    },
                    'ts-loader', // (or awesome-typescript-loader)
                ]
            }
        ]
    },

    // Makes 'request' library work in webpack:
    node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },

    plugins: [
        argv.mode === 'development' ? new webpack.HotModuleReplacementPlugin() : null,
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(argv.mode), // argv.mode values: 'development', 'production'
        }),
        //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html', //Name of file in ./dist/
            template: './src/main/other/html/index.html', //Name of template in ./src/main/webapp
            chunksSortMode: 'none' // Disabled in order to work with dynamic imports() (lazy loading)
        }),
        new CopyWebpackPlugin([
                {from: './src/main/webapp'},
            ],
            {ignore: ['WEB-INF/**/*', 'META-INF/**/*', 'error/**/*', '*.jsp']}
        )
    ].filter(plugin => plugin != null),

    ...getSpecialParams(argv.mode),

    mode: argv.mode,
});

function getSpecialParams(mode) {
    if (mode === 'development') {
        return {
            // https://webpack.github.io/docs/webpack-dev-server.html#webpack-dev-server-cli
            devServer: {
                hot: true, // HotModuleReplacement
                open: false, // Opens browser
                host: '127.0.0.1',
                port: 8081,
                historyApiFallback: true // If page not found, loads index.html.
            },

            // Enable source-map for debugging webpack's output.
            devtool: 'source-map'
        }
    } else {
        return {
            optimization: {
                minimizer: [new TerserWebpackPlugin({
                    terserOptions: {
                        keep_fnames: true,
                        output: {
                            comments: false // Remove copy right comments to reduce size.
                        }
                    }
                })],
                splitChunks: {
                    cacheGroups: { // Put all node_modules libraries in '*.vendor.js'
                        commons: {
                            test: /[\\/]node_modules/,
                            name: 'vendors',
                            chunks: 'all',
                        }
                    }
                }
            }
        };
    }
}
