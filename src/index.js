import css from './style.css';
const displayName = () => {
	console.log( 'Test' );
	const button = document.createElement( 'button' );
	button.textContent = 'Click me';
	document.body.appendChild( button )
};

displayName();