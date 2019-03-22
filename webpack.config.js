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
	// Module allows webpack to decide what it should do when it finds js file, or css file
	module: {
		// Ensures that whenever it finds a js file , it uses babel-loader to convert it to ES6
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader'
			},

			// We are using regex here. This check if the file extension is .css or .scss, then use the below loaders to transpile the css or scss code into js code. It is defined from right to left, sass-loader will convert the code into css, then css loader will convert into js.
			// This will inline the style on the page bundle js file loads
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	},
};