function myLoader( source ) {
	console.log( 'src', this );
	return source;
}

module.exports = myLoader;