// webpack.config.js
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
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
				test: /\.(png|jp?g|svg)$/,
				use: [{
					loader: "url-loader",
					options: {
						limit:5000
					}
				}]
			}
		]
	},

	plugins: [
		new HtmlWebPackPlugin()
	]
};