import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { HomePage } from './pages/home';


function App() {
	return (
		<>
			<BrowserRouter>
				<Route path="/" component={HomePage} exact />
			</BrowserRouter>
		</>
	);
}

export default App;
