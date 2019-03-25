// src/index.js
import Icon from './icon.jpg';
import style from './style.css';

console.log( Icon );

import { createImage } from "./CreateImage";

const myImage = createImage( Icon );

const addButton = () => {
	const button = document.createElement( 'button' );
	button.textContent = 'Click me';

	document.body.appendChild( button );

	document.body.appendChild( myImage );
};

addButton();