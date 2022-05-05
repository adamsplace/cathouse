import './stylesheets/App.css';
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Root from './components/Root'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'


function App() {
	const [ user, setUser ] = useState( false )

	const hP = { user }``
	return (
		
		<Routes>
			<Route index element={<Root />} />
			<Route path="home">
				<Route index element={<Home {...hP} />} />
			</Route>

			<Route path="signup" element={<Signup />} />
			<Route path="login" element={<Login />} />
			
			<Route path="*" element={<NotFound />} />
		</Routes>
		
	)
}

export default App;
