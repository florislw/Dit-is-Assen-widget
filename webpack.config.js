const path = require( 'path' );
const webpack = require( 'webpack' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const bundleOutputDir = './dist';

module.exports = ( env, argv ) => {
    const isProduction = argv.mode === 'production';

    return [
        {
            entry: './src/main.js',
            output: {
                filename: 'widget.js',
                path: path.resolve( bundleOutputDir ),
            },
            mode: isProduction ? 'production' : 'development',
            module: {
                rules: [
                    {
                        test: /\.js$/i,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    [
                                        '@babel/env',
                                        {
                                            targets: {
                                                browsers: ['ie 6', 'safari 7'],
                                            },
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    {
                        test: /\.html$/i,
                        use: 'html-loader',
                    },
                    {
                        test: /\.css$/i,
                        use: [
                            'style-loader',
                            'css-loader',
                            'postcss-loader'
                        ],
                    },
                ],
            },
            devServer: {
                static: {
                    directory: bundleOutputDir,
                },
            },
            plugins: isProduction
                ? [
                    new webpack.optimize.ModuleConcatenationPlugin(),
                    new CopyWebpackPlugin( {
                        patterns: [
                            {
                                from: 'demo/',
                                to: '', // This will copy files from 'demo/' to the output directory
                            },
                        ],
                    } ),
                ]
                : [new webpack.SourceMapDevToolPlugin()],
        },
    ];
};
