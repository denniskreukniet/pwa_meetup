const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = env => {
    const mode = env.mode ? env.mode : 'production';

    return {
        mode,
        entry: {
            main: "./src/index.js"
        },
        output: {
            filename: "[name].[chunkhash].js",
            chunkFilename: "[name].[chunkhash].bundle.js",
            path: path.resolve(__dirname, "dist")
        },
        plugins: [
            new webpack.HashedModuleIdsPlugin(),
            new HtmlWebPackPlugin({
                template:"./index.html",
                minify: {
                    collapseWhitespace: true,
                    removeComments: true
                },
                inject: true
            }),
            new CopyPlugin([{
                from: "src/assets", to: "assets/", ignore: [".DS_STORE"]
            }]),
            new WorkboxPlugin.InjectManifest({
                swSrc:"./src-sw.js",
                swDest:"sw.js"
            })
        ],
        devtool: "source-map"

    }

    // entry: './path/to/my/entry/file.js',
    // output: {
    //     path: path.resolve(__dirname, 'dist'),
    //     filename: 'my-first-webpack.bundle.js'
    // }
};