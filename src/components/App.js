import React from 'react';

import ProfileImg from './images/mypic.jpg';

class App extends React.Component {
	render() {
		return (
			<div>
				<img src={ProfileImg} alt="profile image"/>
			</div>
		);
	}
}

export default App;
