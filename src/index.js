// src/index.js

const loadFooter = () => import( './Footer.js' );

const addButton = () => {
	const button = document.createElement( 'button' );
	button.textContent = 'Click me';

	button.addEventListener( 'click', event => {
		loadFooter().then( module => {
			document.body.appendChild( module.footer );
		} )
	} );

	document.body.appendChild( button );
};

addButton();