// src/index.js
import styles from './style.css';
import buttonStyles from './button.css';

const addButton = () => {
	const button = document.createElement( 'button' );
	button.textContent = 'Click me';

	document.body.appendChild( button );
};

addButton();