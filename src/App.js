//Global Style
import GlobalStyles from './components/GlobalStyles';
import Nav from './components/Nav';

import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import MovieDetails from './pages/MovieDetails';
import ScrollTop from './components/ScrollTop';

//Routes
import { Routes, Route, useLocation } from 'react-router-dom';

//Animation
import { AnimatePresence } from 'framer-motion';

function App() {
	const location = useLocation();
	return (
		<div className='App'>
			<GlobalStyles />
			<Nav />
			<AnimatePresence exitBeforeEnter>
				<Routes location={location} key={location.pathname}>
					<Route path='/' element={<AboutUs />} />
					<Route path='/work' element={<OurWork />} />
					<Route path='/work/:id' element={<MovieDetails />} />
					<Route path='/contact' element={<ContactUs />} />
				</Routes>
				<ScrollTop />
			</AnimatePresence>
		</div>
	);
}

export default App;
