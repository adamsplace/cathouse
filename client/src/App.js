import './stylesheets/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Root from './components/Root'
import NotFound from './components/NotFound'
import Home from './Home'


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Root />} />
				<Route path="home">
					<Route index element={<Home />} />
				</Route>
				
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App;
