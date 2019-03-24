export const createImage = ( imgSrc ) => {
	const image = document.createElement( 'img' );
	image.height = '300';
	image.width = '300';
	image.src = imgSrc;

	return image;
};

