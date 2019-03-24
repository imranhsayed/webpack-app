const HtmlWebPackPlugin = require( 'html-webpack-plugin' );

// webpack.config.js
const path = require( 'path' );
module.exports = {
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
			}
		]
	},

	plugins: [
		new HtmlWebPackPlugin()
	]
};