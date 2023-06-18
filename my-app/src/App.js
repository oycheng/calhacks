import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Calendr from './pages/calendar';
import SignUp from './pages/signup';
import Contact from './pages/contact';
import Record from './pages/record';

function App() {
	return (
		<Router>
			<Navbar/>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/calendar' element={<Calendr />} />
				<Route path='/record' element={<Record />} />
				<Route path='/sign-up' element={<SignUp />} />
			</Routes>
		</Router>
	);
}

export default App;
