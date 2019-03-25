// src/index.js
import Icon from './icon.jpg';
import style from './style.css';

import { createImage } from "./CreateImage";

const myImage = createImage( Icon );


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
	document.body.appendChild( myImage );
};

addButton();