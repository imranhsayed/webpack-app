// webpack.config.js
const path = require( 'path' );
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
	devtool: "source-maps",
	context: __dirname,
	entry: './src/index.js',
	output: {
		path: path.resolve( __dirname, 'dist' ),
		filename: 'main.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ],
			},
			{
				test: /\.(png|jpe?g|svg)$/,
				use: [{
					loader: "url-loader",
					options: {
						limit: 50000000
					}
				}]
			}
		]
	},
	plugins: [ new HtmlWebPackPlugin(), new BundleAnalyzerPlugin() ]
};