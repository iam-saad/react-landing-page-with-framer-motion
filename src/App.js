import Nav from './components/Nav';
import AboutUs from './pages/AboutUs';
//Global Style
import GlobalStyles from './components/GlobalStyles';

function App() {
	return (
		<div className='App'>
			<GlobalStyles />
			<Nav />
			<AboutUs />
		</div>
	);
}

export default App;
