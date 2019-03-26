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
			compilation.hooks.seal.tap( 'MyFirstWebpackPlugin', () => {
				console.log( thisCompilationIWantToInspect );
			} )
		} );
	}
}

module.exports = MyFirstWebpackPlugin;