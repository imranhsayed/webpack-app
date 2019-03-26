class MyFirstWebpackPlugin {
	constructor() {}

	apply( compiler ) {
		compiler.hooks.done.tapAsync( 'MyFirstWebpackPlugin', ( stats, cb ) => {
			const assetNames = [];
			for( let assetName in stats.compilation.assets ) {
				assetNames.push( assetName );
			}
			console.log( assetNames.join( '\n' ) );
			cb();
		});

		compiler.hooks.compilation.tap( 'MyFirstWebpackPlugin',( compilation, params ) => {
			const thisCompilationIWantToInspect = compilation;
			new MyFirstWebpackCompilationPlugin().apply( compilation );
		} );
	}
}

class MyFirstWebpackCompilationPlugin {
	apply( compilation ) {
		compilation.hooks.seal.tap( 'MyFirstWebpackPlugin', () => {

		} )
	}
}

module.exports = MyFirstWebpackPlugin;