import { BrowserRouter } from 'react-router-dom';
import Search from './Pages/Search';
import TourView from './Pages/TourView';
import ArtView from './Pages/ArtView';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import './App.css';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<Search />
				<TourView />
				<ArtView />
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
