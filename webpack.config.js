const path = require( 'path' );
module.exports = {
	context: __dirname,
	entry: {
		index: './src/index.js',
		about: './src/about.js'
	},
	output: {
		path: path.resolve( __dirname, 'dist' ),
		filename: '[name].js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader'
			}
		]
	}
};