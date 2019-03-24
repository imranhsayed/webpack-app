import imageBase64 from './Icon.jpg';

const displayName = () => {
	console.log( 'Test' );
	const img = document.createElement( 'img' );
	img.src = imageBase64;
	document.body.appendChild( img )
};

displayName();