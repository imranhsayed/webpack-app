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
				exclude: /node_modules/,
				loader: "babel-loader",
				query: {
					presets: ['env']
				}
			},
		]
	},
	plugins: [ new HtmlWebPackPlugin() ]
};