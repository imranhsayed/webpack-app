module.exports = () => ({
	resolveLoader: {
		alias: {
			"my-loader": require.resolve( './build-utils/my-loader.js' )
		}
	}
});