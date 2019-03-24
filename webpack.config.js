const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const webpack = require( 'webpack' );

module.exports = ({ mode }) => {

	return {
		mode,
		output: {
			filename: "bundle.js"
		},

		plugins: [
			new HtmlWebPackPlugin(), new webpack.ProgressPlugin()
		]
	}
};