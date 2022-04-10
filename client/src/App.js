import './stylesheets/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Root from './components/Root'
import NotFound from './components/NotFound'
import Home from './components/Home'


function App() {
	const [ user, setUser ] = useState( false )

	const hP = { user }
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Root />} />
				<Route path="home">
					<Route index element={<Home {...hP} />} />
				</Route>
				
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App;
