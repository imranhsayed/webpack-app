// webpack.config.js
const path = require( 'path' );
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );

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
	plugins: [ new HtmlWebPackPlugin() ]
};