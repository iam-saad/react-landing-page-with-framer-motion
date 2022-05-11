import Nav from './components/Nav';
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import MovieDetails from './pages/MovieDetails';

//Global Style
import GlobalStyles from './components/GlobalStyles';

//Routes
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<GlobalStyles />
			<Nav />
			<Routes>
				<Route path='/' element={<AboutUs />} />
				<Route path='/work' element={<OurWork />} />
				<Route path='/work/:id' element={<MovieDetails />} />
				<Route path='/contact' element={<ContactUs />} />
			</Routes>
		</div>
	);
}

export default App;
