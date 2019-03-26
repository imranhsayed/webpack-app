function myLoader( source ) {
	console.log( 'src', this.resource );
	return source;
}

module.exports = myLoader;