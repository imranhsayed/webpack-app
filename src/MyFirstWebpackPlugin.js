class MyFirstWebpackPlugin {
	constructor() {}

	apply( compiler ) {
		compiler.plugin( 'make', ( compilation ) => {
			console.log( ' I now have access to the compilation' );
		} );
	}
}

module.exports = MyFirstWebpackPlugin;