import { Route, Routes } from 'react-router-dom';
import Search from './Pages/Search';
import Home from './Pages/Home';
import TourView from './Pages/TourView.jsx';
import ArtView from './Pages/ArtView.jsx';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer.jsx';
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
